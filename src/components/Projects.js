import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaGlobe, FaFigma} from 'react-icons/fa';
import './styles/Projects.css';
import faceMashImg from '../assets/imgs/facemash.png';
import deliveryImg from '../assets/imgs/dalivery.png';
import lottoIMG from '../assets/imgs/lotto.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Food Delivery",
      description: "แอปพลิเคชันที่ให้คุณสั่งอาหารจากร้านอาหารมากมาย ผ่านมือถือ และรับเองที่ร้าน หรือส่งไปบ้าน โดยมีราคาที่ใช่ และรสชาติที่ชอบ",
      image: deliveryImg,
      category: "fullstack",
      technologies: ["Flutter", "MongoDB", "Angular", "Node.js", "Figma" , "Cloudinary"],
      // github: "",
      // live: "https://ecommerce-demo.com",
      type: "mobile"
    },
    {
      id: 2,
      title: "FaceMask",
      description: "แอปพลิเคชันจัดอันดับแรงค์ ผลโหวตของผู้คนในรายสัปดาห์",
      image: faceMashImg,
      category: "fullstack",
      technologies: ["Angular", "Node.js", "JWT", "Cloudinary", "Material-UI", "MongoDB", "Express"],
      // github: "https://github.com/yourusername/task-app",
      // live: "https://task-app-demo.com",
      type: "web"
    },
    {
      id: 3,
      title: "Lotto",
      description: "API สำหรับระบบจัดการร้านอาหาร รวมถึงการจัดการเมนู การจองโต๊ะ และการสั่งอาหาร",
      image: lottoIMG,
      category: "fullstack",
      technologies: ["Flutter", "MongoDB", "Angular", "Node.js", "Figma"],
      // github: "https://github.com/yourusername/restaurant-api",
      // live: "https://restaurant-api-docs.com",
      figma: "https://www.figma.com/proto/6GWVqBH2IP2Mb8MkFnqdud/Mobile_Lotto?node-id=1-2&starting-point-node-id=1%3A2",
      type: "mobile"
    },
    {
      id: 4,
      title: "IMBI",
      description: "....",
      image: "https://via.placeholder.com/400x250/f5576c/ffffff?text=Fitness+App",
      category: "fullstack",
      technologies: ["React Native", "Node.js", "MongoDB", "Expo"],
      // github: "https://github.com/yourusername/fitness-app",
      // live: "https://fitness-app-demo.com",
      
      type: "mobile"
    },
    {
      id: 5,
      title: "Pizza",
      description: "....",
      image: "https://via.placeholder.com/400x250/f5576c/ffffff?text=Fitness+App",
      category: "fullstack",
      technologies: ["React Native", "Node.js", "MongoDB", "Expo"],
      // github: "https://github.com/yourusername/fitness-app",
      // live: "https://fitness-app-demo.com",
      
      type: "web"
    },
    {
      id: 6,
      title: "On-Screen Keyboard on Desktop & Libary JavaScript & Chorme Extension",
      description: "....",
      image: "https://via.placeholder.com/400x250/f5576c/ffffff?text=Fitness+App",
      category: "fullstack",
      technologies: ["python", "javaScript", "AES"],
      // github: "https://github.com/yourusername/fitness-app",
      // live: "https://fitness-app-demo.com",
      
      type: "web"
    },
    {
      id: 7,
      title: "Paint",
      description: "....",
      image: "https://via.placeholder.com/400x250/f5576c/ffffff?text=Fitness+App",
      category: "fullstack",
      technologies: ["React Native", "Node.js", "MongoDB", "Expo"],
      // github: "https://github.com/yourusername/fitness-app",
      // live: "https://fitness-app-demo.com",
      
      type: "web"
    },
  ];

  // const filters = [
  //   { id: 'all', label: 'ทั้งหมด' },
  //   { id: 'fullstack', label: 'Full-Stack' },
  //   { id: 'frontend', label: 'Frontend' },
  //   { id: 'backend', label: 'Backend' }
  // ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTypeIcon = (type) => {
    switch(type) {
      case 'mobile': return <FaMobile />;
      case 'api': return <FaCode />;
      default: return <FaGlobe />;
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <h2 className="section-title">ผลงานของฉัน</h2>
        
        {/* <div className="projects-filter">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div> */}

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.figma} target="_blank" rel="noopener noreferrer">
                      <FaFigma />
                    </a>
                  </div>
                </div>
                <div className="project-type">
                  {getTypeIcon(project.type)}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="projects-cta">
          <p>สนใจผลงานของฉันหรือไม่?</p>
          <a href="#contact" className="btn btn-primary">
            ติดต่อเพื่อปรึกษา
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects; 