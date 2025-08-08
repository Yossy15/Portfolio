import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import "./styles/Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: FaHtml5, level: 90, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, level: 85, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, level: 88, color: "#F7DF1E" },
        { name: "React.js", icon: FaReact, level: 85, color: "#61DAFB" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 80, color: "#339933" },
        { name: "Database", icon: FaDatabase, level: 82, color: "#336791" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 85, color: "#F05032" },
        { name: "Figma", icon: FaFigma, level: 75, color: "#F24E1E" },
      ],
    },
  ];

  const positions = [
    {
      title: "Full-Stack Developer",
      description: "พัฒนาแอปพลิเคชันแบบครบวงจรตั้งแต่ Frontend ถึง Backend",
      skills: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Frontend Developer",
      description: "สร้าง User Interface ที่สวยงามและใช้งานง่าย",
      skills: ["HTML5", "CSS3", "JavaScript", "React"],
    },
    {
      title: "Backend Developer",
      description: "ออกแบบและพัฒนา API และระบบจัดการข้อมูล",
      skills: ["Node.js", "MySQL", "MongoDB"],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <h2 className="section-title">ทักษะและความเชี่ยวชาญ</h2>

        <div className="skills-content">
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <skill.icon
                          className="skill-icon"
                          style={{ color: skill.color }}
                        />
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="positions-section">
            <h3 className="positions-title">ตำแหน่งที่สนใจ</h3>
            <div className="positions-grid">
              {positions.map((position, index) => (
                <div key={index} className="position-card">
                  <h4 className="position-title">{position.title}</h4>
                  <p className="position-description">{position.description}</p>
                  <div className="position-skills">
                    {position.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="position-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
