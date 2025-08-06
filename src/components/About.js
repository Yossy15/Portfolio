import React from 'react';
import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './styles/About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <h2 className="section-title">เกี่ยวกับฉัน</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <h3>สวัสดีครับ! 👋</h3>
              <p>
                ผมเป็นนักพัฒนาเว็บไซต์ที่มีความหลงใหลในการสร้างสรรค์แอปพลิเคชันที่ใช้งานง่าย 
                และมีประสิทธิภาพ ด้วยประสบการณ์มากกว่า 3 ปีในการพัฒนาเว็บไซต์
              </p>
              <p>
                ผมเชี่ยวชาญในการพัฒนาแอปพลิเคชันแบบ Full-Stack โดยใช้เทคโนโลยีที่ทันสมัย 
                เช่น React, Node.js, Python และฐานข้อมูลต่างๆ
              </p>
              <p>
                ผมชอบเรียนรู้เทคโนโลยีใหม่ๆ และแก้ไขปัญหาที่ท้าทาย 
                และพร้อมที่จะทำงานในทีมเพื่อสร้างผลงานที่มีคุณภาพ
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <h4>3+</h4>
                <p>ปีประสบการณ์</p>
              </div>
              <div className="stat-item">
                <h4>20+</h4>
                <p>โปรเจคสำเร็จ</p>
              </div>
              <div className="stat-item">
                <h4>15+</h4>
                <p>ลูกค้าพึงพอใจ</p>
              </div>
            </div>
          </div>

          <div className="about-info">
            <div className="info-card">
              <h3>ข้อมูลส่วนตัว</h3>
              <div className="info-list">
                <div className="info-item">
                  <FaUser className="info-icon" />
                  <div>
                    <strong>ชื่อ:</strong> ชื่อของคุณ
                  </div>
                </div>
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <strong>ที่อยู่:</strong> กรุงเทพมหานคร, ประเทศไทย
                  </div>
                </div>
                <div className="info-item">
                  <FaPhone className="info-icon" />
                  <div>
                    <strong>โทรศัพท์:</strong> +66 8X XXX XXXX
                  </div>
                </div>
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div>
                    <strong>อีเมล:</strong> 65011212240@msu.ac.th
                  </div>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3>การศึกษา & ประสบการณ์</h3>
              <div className="info-list">
                <div className="info-item">
                  <FaGraduationCap className="info-icon" />
                  <div>
                    <strong>การศึกษา:</strong> ปริญญาตรี วิทยาการคอมพิวเตอร์ <br/>
                    <strong>การศึกษา:</strong> ปริญญาตรี วิทยาการคอมพิวเตอร์ <br/>
                    <strong>การศึกษา:</strong> ปริญญาตรี วิทยาการคอมพิวเตอร์ <br/>
                    <strong>การศึกษา:</strong> ปริญญาตรี วิทยาการคอมพิวเตอร์ <br/>
                  </div>
                  
                </div>
                <div className="info-item">
                  <FaBriefcase className="info-icon" />
                  <div>
                    <strong>ตำแหน่ง:</strong> Full-Stack Developer
                  </div>
                </div>
                <div className="info-item">
                  <FaBriefcase className="info-icon" />
                  <div>
                    <strong>ประสบการณ์:</strong> 3+ ปี
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 