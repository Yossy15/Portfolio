import React from 'react';
import { FaGithub, FaFacebookF, FaEnvelope, FaDownload } from 'react-icons/fa';
import './styles/Profile.css';

const Profile = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              สวัสดีครับ, ผมชื่อ <span className="highlight">YOSSY</span>
            </h1>
            <h2 className="hero-subtitle">
              Full-Stack Developer
            </h2>
            <p className="hero-description">
              ผมเป็นนักพัฒนาเว็บไซต์ที่มีความเชี่ยวชาญในการพัฒนาแอปพลิเคชันแบบ Full-Stack 
              ตั้งแต่ Front-end ไปจนถึง Back-end และ Database
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                ดูผลงาน
              </button>
              <button className="btn btn-secondary">
                <FaDownload /> ดาวน์โหลด Resume
              </button>
            </div>

            <div className="hero-social">
              <a href="https://www.facebook.com/profile.php?id=100000000000000" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="mailto:your.email@example.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-image">
                {/* ใส่รูปโปรไฟล์ของคุณที่นี่ */}
                <div className="placeholder-image">
                  <span>
                    <img src="https://wallpapers.com/images/hd/cool-profile-pictures-hoodie-cat-6dkl56hixhnq590g.jpg" style={{borderRadius: '50%'}} alt="Profile" />
                  </span>
                </div>
              </div>
              <div className="profile-info">
                <h3>YOSSY</h3>
                <p>Full-Stack Developer</p>
                <p>📍 มหาสารคาม, ประเทศไทย</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Profile; 