import React from "react";
import "./Contact.css";

const Contact = () => {
  const contactData = [
    {
      title: "Phone",
      info: "+91 9491839431",
      icon: "https://www.shutterstock.com/image-vector/mobile-phone-round-icon-long-600w-440052115.jpg",
    },
    {
      title: "Email",
      info: "battalasiva2003@gmail.com",
      icon: "https://previews.123rf.com/images/victor85/victor851711/victor85171100326/90448522-mail-icon-with-long-shadow-flat-design-style-round-icon-mail-silhouette-simple-circle-icon-modern.jpg",
    },
    {
      title: "Address",
      info: "Srikakulam,Andhra Pradesh",
      icon: "https://icon-library.com/images/location-icon-logo/location-icon-logo-24.jpg",
    },
  ];

  return (
    <section id="contact">
      <div className="contact container">
        <div>
          <h1 className="section-title">
            Contact <span>info</span>
          </h1>
        </div>
        <div className="contact-items">
          {contactData.map((item, index) => (
            <div className="contact-item" key={index}>
              <div className="icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <div className="contact-info">
                <h1>{item.title}</h1>
                <h2>{item.info}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
