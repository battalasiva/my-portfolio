import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact, updateContact } from '../../redux/slices/contactSlice';
import { Form, FormGroup, Label, Input } from '../common/Form.styles';
import { FormButton, ButtonGroup } from '../common/Button.styles';

const ContactForm = ({ onClose, existingData }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.contact);

  const [formData, setFormData] = useState({
    phone: existingData?.phone || '',
    email: existingData?.email || '',
    address: existingData?.address || '',
    socialLinks: existingData?.socialLinks || [
      { platform: 'LinkedIn', url: '' },
      { platform: 'GitHub', url: '' },
      { platform: 'Twitter', url: '' },
    ],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSocialChange = (index, field, value) => {
    const newSocialLinks = [...formData.socialLinks];
    newSocialLinks[index][field] = value;
    setFormData({ ...formData, socialLinks: newSocialLinks });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (existingData) {
      await dispatch(updateContact(formData));
    } else {
      await dispatch(createContact(formData));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Phone *</Label>
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 1234567890"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Email *</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Address *</Label>
        <Input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="City, State"
          required
        />
      </FormGroup>

      <h3 style={{ fontSize: '1.8rem', marginTop: '20px', marginBottom: '10px' }}>Social Links</h3>

      {formData.socialLinks.map((social, index) => (
        <FormGroup key={index}>
          <Label>{social.platform} URL</Label>
          <Input
            type="url"
            value={social.url}
            onChange={(e) => handleSocialChange(index, 'url', e.target.value)}
            placeholder={`https://${social.platform.toLowerCase()}.com/yourprofile`}
          />
        </FormGroup>
      ))}

      <ButtonGroup>
        <FormButton type="button" onClick={onClose} disabled={loading}>
          Cancel
        </FormButton>
        <FormButton type="submit" primary disabled={loading}>
          {loading ? 'Saving...' : existingData ? 'Update' : 'Create'}
        </FormButton>
      </ButtonGroup>
    </Form>
  );
};

export default ContactForm;