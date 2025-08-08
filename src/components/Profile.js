import React from 'react';
import { FaGithub, FaFacebookF, FaEnvelope, FaDownload } from 'react-icons/fa';
import './styles/Profile.css';
import profileImg from "../assets/imgs/profile.jpg";

const ID = "1iC8ybmcJClmPBFbfK6K3DtHsa0XOFGcz";
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
              สวัสดีครับ, ผมชื่อ <span className="highlight"> นายสุวิจักณ์ ใจสุข</span>
            </h1>
            <h2 className="hero-subtitle">
              Full-Stack Developer
            </h2>
            <p className="hero-description">
              ผมสนใจในสายงานนักพัฒนาเว็บไซต์ที่มีการพัฒนาแอปพลิเคชันแบบ Full-Stack 
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
                <FaDownload /> <a href={`https://drive.google.com/uc?export=download&id=${ID}`}>ดาวน์โหลด Resume</a>
              </button>
              <button className="btn btn-secondary">
                <a href={`https://drive.google.com/file/d/${ID}/view?usp=sharing`} target="_blank">ดู Resume</a>
              </button>
            </div>

            <div className="hero-social">
              <a href="https://www.facebook.com/padyod.suwijak.2025" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://github.com/Yossy15" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="mailto:65011212240@msu.ac.th">
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
                    <img src={profileImg} style={{borderRadius: '50%'}} alt="Profile" />
                  </span>
                </div>
              </div>
              <div className="profile-info">
                <h3>YOSSY</h3>
                <p>Full-Stack Developer</p>
                <p>📍 มหาวิทยาลัยมหาสารคาม <br /> จังหวัดมหาสารคาม ประเทศไทย</p>
                
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