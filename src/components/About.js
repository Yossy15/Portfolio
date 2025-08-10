import React from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import "./styles/About.css";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <h2 className="section-title">เกี่ยวกับฉัน</h2>

        <div className="about-content">
          <div className="about-info">
            <div className="info-card">
              <h3>ข้อมูลส่วนตัว</h3>
              <div className="info-list">
                <div className="info-item">
                  <FaUser className="info-icon" />
                  <div>
                    <strong>ชื่อ:</strong> นายสุวิจักณ์ ใจสุข{" (พัดยศ)"}
                  </div>
                </div>
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <strong>ที่อยู่:</strong> 20/1 หมู่9, ตำบลตรมไพร, อำเภอศีขรภูมิ, จังหวัดสุรินทร์, 32110, ประเทศไทย
                  </div>
                </div>
                <div className="info-item">
                  <FaPhone className="info-icon" />
                  <div>
                    <a href="tel: 0647879972"><strong>โทรศัพท์:</strong></a> 0647879972
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
          </div>

          <div className="about-text">
            <div className="info-card">
              <h3>การศึกษา & ประสบการณ์</h3>
              <div className="info-list">
                <div className="info-item">
                  <FaGraduationCap className="info-icon" />
                  <div>
                    <strong>การศึกษาระดับปริญญาตรี</strong><br /> วิทยาการคอมพิวเตอร์ มหาวิทยาลัยมหาสารคาม จังหวัดมหาสารคาม{" (GPAX: 3.06)"}
                    <br /><br />
                    <strong>การศึกษาระดับมัธยมศึกษาตอนปลาย</strong><br /> โรงเรียนศีขรภูมิพิสัย จังหวัดสุรินทร์{" (GPAX: 3.48)"}
                    <br />
                  </div>
                </div>
                <div className="info-item">
                  <FaBriefcase className="info-icon" />
                  <div>
                    <strong>ตำแหน่งที่สนใจ:</strong> Full-Stack Developer & Frontend & Backend
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
