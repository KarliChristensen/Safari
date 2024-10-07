import Link from "next/link";
import Social from "../socials/page";
import { useState } from "react";
import Modal from "./modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/plain.css";

const Contactcontainer = () => {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    khwai: "",
    victoria: false,
    savuti: "",
    chobe: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [modalMessage, setModalMessage] = useState(""); // State to store modal message

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const sendEMail = async (e) => {
    e.preventDefault(); // Prevent form submission
    setLoading(true);

    try {
      const response = await fetch("/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResult(data);

      // Clear the form fields after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        khwai: "",
        guidedw: false,
        victoria: false,
        savuti: "",
        chobe: "",
        message: "",
      });

      // Show success message in modal
      setModalMessage(
        "Email recieved, we'll get back to you as soon as possible!"
      );
      setIsModalOpen(true);
    } catch (error) {
      setResult({ error: "Failed to send email" });

      // Show error message in modal
      setModalMessage(
        "Something went wrong, try again or reach out to us at Support@shangamera.com."
      );
      setIsModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="contact__area section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 lg-mb-30">
              <div className="contact__area-title">
                <h3 className="mb-25">Get in touch</h3>
                <p>
                  We are always available for any questions or queries you might
                  have, and we will endeavour to get back to you as quickly as
                  possible.
                </p>
              </div>
              <div className="contact__area-info">
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-phone-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Phone</span>
                    <h6>
                      <a href="tel:+123(458)896895">+123 ( 458 ) 896 895</a>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Email</span>
                    <h6>
                      <a href="mailto:support@gamil.com">
                        Support@shangamera.com
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Office Address</span>
                    <h6>
                      <a href="#">GXF4+8HQ Chippenham United Kingdom </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="contact__area-social">
                <Social />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="contact__area-form">
                <h3 className="mb-25">Begin your booking</h3>
                <p className="">
                  It is recommended that you fully familiarize yourself with the
                  experience we offer, and what each option entails. You can
                  find out more about the full Botswana experience{" "}
                  <Link
                    href="/trip-details"
                    style={{
                      color: "#B89146",
                    }}
                  >
                    here.
                  </Link>
                </p>
                <form onSubmit={sendEMail}>
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
                      <div className="col-span-1 sm:col-span-2">
                        <PhoneInput
                        placeholder="Phone Number"
                          enableSearch={true}
                          countryCodeEditable={false}
                          searchStyle={{ height: "40px" }}
                          inputStyle={{
                            width: "100%",
                            height: "60px",
                            fontFamily: "Lato, sans-serif",
                          }}
                          containerStyle={{ height: "60px" }}
                          value={formData.phone}
                          onChange={(phone) =>
                            setFormData({ ...formData, phone })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 mb-30">
                      <div className="contact__area-form-item">
                        <i className="far fa-compass"></i>
                        <input
                          type="number"
                          name="khwai"
                          className="peer/khwai invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                          placeholder="Khwai Okavango - People travelling"
                          value={formData.khwai}
                          onChange={handleChange}
                          min={4}
                          required
                        />
                        <span className="collapse peer-invalid/khwai:visible mt-2 ml-5 text-xs text-gray-600 opacity-50 transition-all duration-300 ease-in-out">
                          Minimum 4 people required
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-12 mb-30">
                      <h6
                        style={{
                          marginLeft: "12px",
                          marginBottom: "10px",
                        }}
                      >
                        Optional add-ons to your Khwai Okavango stay
                      </h6>
                      <div className="relative">
                        <input
                          style={{
                            marginLeft: "20px",
                            accentColor: "#B89146",
                            outlineColor: "#B89146",
                          }}
                          type="checkbox"
                          id="guidedwalks"
                          checked={formData.guidedwalks}
                          onChange={handleChange}
                          name="guidedw"
                        />
                        <label
                          style={{
                            color: "gray",
                            fontSize: "14px",
                            marginLeft: "12px",
                          }}
                          htmlFor="guidedwalks"
                        >
                          Guided walks
                        </label>
                      </div>
                    </div>

                    <div className="col-sm-12 mb-30">
                      <div className="contact__area-form-item">
                        <i className="far fa-compass"></i>
                        <input
                          type="number"
                          name="savuti"
                          placeholder="Savuti - People travelling"
                          value={formData.savuti}
                          min={0}
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
                          placeholder="Chobe - People travelling"
                          value={formData.chobe}
                          min={0}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 mb-30">
                      <h6
                        style={{
                          marginLeft: "12px",
                          marginBottom: "10px",
                        }}
                      >
                        Optional add-ons to your Chobe stay
                      </h6>
                      <div className="relative">
                        <input
                          style={{
                            marginLeft: "20px",
                            accentColor: "#B89146",
                            outlineColor: "#B89146",
                          }}
                          type="checkbox"
                          id="victoriafalls"
                          checked={formData.victoria}
                          onChange={handleChange}
                          name="victoria"
                        />
                        <label
                          style={{
                            color: "gray",
                            fontSize: "14px",
                            marginLeft: "12px",
                          }}
                          htmlFor="victoriafalls"
                        >
                          Victoria Falls
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-12 mb-30">
                      <div className="contact__area-form-item">
                        <i className="far fa-comments"></i>
                        <textarea
                          name="message"
                          placeholder="Do you have any questions for us?"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact__area-form-item">
                        <button type="submit" disabled={loading}>
                          Submit Now<i className="fal fa-long-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <Modal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  message={modalMessage}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="contact__area-map section-padding">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170549.58607472552!2d23.662752094217844!3d-19.166834568681704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1956bf3c78c2cd23%3A0xe8dc4c1db6de2fc8!2sKhwai%20River!5e0!3m2!1sen!2sdk!4v1726424596797!5m2!1sen!2sdk"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactcontainer;
