import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaHeart } from 'react-icons/fa';
import './styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>
              นักพัฒนาเว็บไซต์ที่มีความหลงใหลในการสร้างสรรค์แอปพลิเคชันที่ใช้งานง่าย 
              และมีประสิทธิภาพ
            </p>
            <div className="footer-social">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>ลิงก์ด่วน</h4>
            <ul className="footer-links">
              <li><a href="#home">หน้าแรก</a></li>
              <li><a href="#about">เกี่ยวกับฉัน</a></li>
              <li><a href="#skills">ทักษะ</a></li>
              <li><a href="#projects">ผลงาน</a></li>
              <li><a href="#contact">ติดต่อ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>บริการ</h4>
            <ul className="footer-links">
              <li><a href="#projects">พัฒนาเว็บไซต์</a></li>
              <li><a href="#projects">พัฒนาแอปมือถือ</a></li>
              <li><a href="#projects">ออกแบบ UI/UX</a></li>
              <li><a href="#projects">ให้คำปรึกษา</a></li>
              <li><a href="#contact">รับงานฟรีแลนซ์</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>ติดต่อ</h4>
            <div className="footer-contact">
              <p>📍 กรุงเทพมหานคร, ประเทศไทย</p>
              <p>📧 your.email@example.com</p>
              <p>📱 +66 8X XXX XXXX</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              © {currentYear} Portfolio. สร้างด้วย <FaHeart className="heart-icon" /> โดย React
            </p>
            <button className="scroll-top-btn" onClick={scrollToTop}>
              ↑ กลับขึ้นด้านบน
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 