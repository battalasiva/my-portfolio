import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContact, clearSuccess } from "../../redux/slices/contactSlice";
import { ContactSection, ContactContainer, ContactItems, ContactItem, Icon, ContactInfo } from "./Contact.styles";
import { SectionTitle } from "../../styles/GlobalStyles";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaEdit, FaPlus } from "react-icons/fa";
import Loader from "../common/Loader";
import ErrorDisplay from "../common/ErrorDisplay";
import Modal from "../common/Modal";
import Toast from "../common/Toast";
import ContactForm from "./ContactForm";
import { IconButton } from "../common/Button.styles";

const Contact = () => {
  const dispatch = useDispatch();
  const { data: contact, loading, error, success } = useSelector((state) => state.contact);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (success) {
      setShowToast(true);
      setIsModalOpen(false);
      dispatch(fetchContact());
      dispatch(clearSuccess());
    }
  }, [success, dispatch]);

  if (loading && !contact) {
    return (
      <ContactSection id="contact">
        <ContactContainer className="contact">
          <SectionTitle className="section-title">
            Contact <span>info</span>
          </SectionTitle>
          <Loader minHeight="300px" />
        </ContactContainer>
      </ContactSection>
    );
  }

  if (error && !contact) {
    return (
      <ContactSection id="contact">
        <ContactContainer className="contact">
          <SectionTitle className="section-title">
            Contact <span>info</span>
          </SectionTitle>
          <ErrorDisplay 
            message={error} 
            onRetry={() => dispatch(fetchContact())} 
            minHeight="300px"
          />
        </ContactContainer>
      </ContactSection>
    );
  }

  if (!contact) {
    return (
      <ContactSection id="contact">
        <ContactContainer className="contact">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
            <SectionTitle className="section-title">
              Contact <span>info</span>
            </SectionTitle>
            <IconButton onClick={() => setIsModalOpen(true)} title="Add Contact Info"><FaPlus /></IconButton>
          </div>
          <p style={{ textAlign: 'center', fontSize: '1.6rem', marginTop: '20px' }}>No contact information available.</p>
        </ContactContainer>
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          title="Create Contact Info"
        >
          <ContactForm onClose={() => setIsModalOpen(false)} existingData={null} />
        </Modal>
      </ContactSection>
    );
  }

  const contactData = [
    {
      title: "Phone",
      info: contact.phone,
      IconComponent: FaPhone,
    },
    {
      title: "Email",
      info: contact.email,
      IconComponent: FaEnvelope,
    },
    {
      title: "Address",
      info: contact.address,
      IconComponent: FaMapMarkerAlt,
    },
  ];

  return (
    <ContactSection id="contact">
      <ContactContainer className="contact">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
          <SectionTitle className="section-title">
            Contact <span>info</span>
          </SectionTitle>
          <IconButton onClick={() => setIsModalOpen(true)} title="Edit Contact"><FaEdit /></IconButton>
        </div>
        <ContactItems className="contact-items">
          {contactData.map((item, index) => (
            <ContactItem className="contact-item" key={index}>
              <Icon className="icon">
                <item.IconComponent />
              </Icon>
              <ContactInfo className="contact-info">
                <h1>{item.title}</h1>
                <h2>{item.info}</h2>
              </ContactInfo>
            </ContactItem>
          ))}
        </ContactItems>
      </ContactContainer>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Update Contact Info"
      >
        <ContactForm onClose={() => setIsModalOpen(false)} existingData={contact} />
      </Modal>

      {showToast && (
        <Toast 
          message="Contact info saved successfully!" 
          type="success" 
          onClose={() => setShowToast(false)} 
        />
      )}
    </ContactSection>
  );
};

export default Contact;
