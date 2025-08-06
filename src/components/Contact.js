import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import './styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('ขอบคุณสำหรับข้อความ! ผมจะติดต่อกลับโดยเร็วที่สุด');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "อีเมล",
      value: "65011212240@msu.ac.th",
      link: "mailto:65011212240@msu.ac.th"
    },
    {
      icon: FaPhone,
      title: "โทรศัพท์",
      value: "+66 8X XXX XXXX",
      link: "tel:+668XXXXXXXX"
    },
    {
      icon: FaMapMarkerAlt,
      title: "ที่อยู่",
      value: "กรุงเทพมหานคร, ประเทศไทย",
      link: null
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <h2 className="section-title">ติดต่อฉัน</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>ข้อมูลการติดต่อ</h3>
            <p>
              สนใจทำงานร่วมกันหรือมีโปรเจคที่น่าสนใจ? 
              ติดต่อผมได้เลยครับ ผมพร้อมให้คำปรึกษาและร่วมงานกับคุณ
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    <info.icon />
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>ติดตามฉันได้ที่</h4>
              <div className="social-icons">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>ส่งข้อความถึงฉัน</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">ชื่อ *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="ชื่อของคุณ"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">อีเมล *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="65011212240@msu.ac.th"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">หัวข้อ *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="หัวข้อข้อความ"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">ข้อความ *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="เขียนข้อความของคุณที่นี่..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'กำลังส่ง...'
                ) : (
                  <>
                    <FaPaperPlane /> ส่งข้อความ
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 