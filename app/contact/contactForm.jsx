"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    khwai_okavango: "",
    savuti: "",
    chobe: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("./sendEmail.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          khwai_okavango: "",
          savuti: "",
          chobe: "",
          message: "",
        });
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-6 mb-30">
          <div className="contact__area-form-item">
            <i className="fal fa-user"></i>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-sm-6 sm-mb-30">
          <div className="contact__area-form-item">
            <i className="far fa-envelope-open"></i>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-sm-6 mb-30">
          <div className="contact__area-form-item">
            <i className="far fa-phone-alt"></i>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-30">
          <div className="col-sm-12 mb-30">
            <div className="contact__area-form-item">
              <i className="far fa-compass"></i>
              <input
                type="number"
                name="khwai_okavango"
                placeholder="Khwai Okavango - Persons Going"
                value={formData.khwai_okavango}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-sm-12 mb-30">
            <div className="contact__area-form-item">
              <i className="far fa-compass"></i>
              <input
                type="number"
                name="savuti"
                placeholder="Savuti - Persons Going"
                value={formData.savuti}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-sm-12 mb-30">
            <div className="contact__area-form-item">
              <i className="far fa-compass"></i>
              <input
                type="number"
                name="chobe"
                placeholder="Chobe - Persons Going"
                value={formData.chobe}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="contact__area-form-item">
              <i className="far fa-comments"></i>
              <textarea
                name="message"
                placeholder="Anything else we need to know?"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="contact__area-form-item">
            <button className="theme-btn" type="submit">
              Submit Now<i className="fal fa-long-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;