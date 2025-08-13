import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaGlobe, FaFigma} from 'react-icons/fa';
import './styles/Projects.css';
import faceMashImg from '../assets/imgs/facemash.png';
import deliveryImg from '../assets/imgs/daliverys.png';
import lottoIMG from '../assets/imgs/lottos.png';
import imdbImg from '../assets/imgs/imdb.png';
import oskIMG from '../assets/imgs/osk.png';
import pizzaIMG from '../assets/imgs/pizza.png'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Food Delivery",
      description: "แอปพลิเคชันที่ให้คุณสั่งอาหารจากร้านอาหารมากมาย ผ่านมือถือ และรับเองที่ร้าน หรือส่งไปบ้าน โดยมีราคาที่ใช่ และรสชาติที่ชอบ",
      image: deliveryImg,
      category: "fullstack",
      technologies: ["Flutter", "MongoDB", "Node.js", "Figma" , "Cloudinary"],
      github: "https://github.com/Yossy15/Project/tree/main/delivery",
      // live: "https://ecommerce-demo.com",
      // figma: "https://www.figma.com/proto/6GWVqBH2IP2Mb8MkFnqdud/Mobile_Lotto?node-id=1-2&starting-point-node-id=1%3A2",
      type: "mobile"
    },
    {
      id: 2,
      title: "FaceMask",
      description: "แอปพลิเคชันจัดอันดับแรงค์ ผลโหวตของผู้คนในรายสัปดาห์",
      image: faceMashImg,
      category: "fullstack",
      technologies: ["Node.js", "JWT", "Cloudinary", "MongoDB", "Express"],
      github: "https://github.com/Yossy15/Project/tree/main/facemask",
      live: "https://stately-pixie-12fd56.netlify.app/",
      // figma: "https://www.figma.com/proto/6GWVqBH2IP2Mb8MkFnqdud/Mobile_Lotto?node-id=1-2&starting-point-node-id=1%3A2",
      type: "web"
    },
    {
      id: 3,
      title: "Lotto",
      description: "แอปพลิเคชันจำลองการซื้อขายสล่กกินแบ่ง และตรวจเช็คสลากกินแบ่ง พร้อมมีการจัดการในหน้าของ Admin ในการออกสลากกินแบ่ง",
      image: lottoIMG,
      category: "fullstack",
      technologies: ["Flutter", "MongoDB", "Node.js", "Figma"],
      github: "https://github.com/Yossy15/LottoFront",
      // live: "https://restaurant-api-docs.com",
      // figma: "https://www.figma.com/proto/6GWVqBH2IP2Mb8MkFnqdud/Mobile_Lotto?node-id=1-2&starting-point-node-id=1%3A2",
      type: "mobile"
    },
    {
      id: 4,
      title: "IMDB",
      description: "เว็ปให้คะแนนและรีวิวหนังจากผู้ชมทั่วโลก มีข้อมูลครบถ้วนเกี่ยวกับภาพยนตร์และซีรีส์ทุกประเภท",
      image: imdbImg,
      category: "frontend",
      technologies: ["Html", "API", "CSS"],
      // github: "https://github.com/yourusername/fitness-app",
      // live: "https://fitness-app-demo.com",
      // figma: "https://www.figma.com/proto/6GWVqBH2IP2Mb8MkFnqdud/Mobile_Lotto?node-id=1-2&starting-point-node-id=1%3A2",
      type: "web"
    },
    {
      id: 5,
      title: "Pizza",
      description: "เว็ปไซต์สำหรับการออกแบบการสั่งซื้อพิซซ่า และการชำระเงิน",
      image: pizzaIMG,
      category: "frontend",
      technologies: ["Html", "PHP", "MySql", "Xampp"],
      github: "https://github.com/Yossy15/Project/tree/main/pizza",
      // live: "https://fitness-app-demo.com",
      // figma: "https://www.figma.com/proto/6GWVqBH2IP2Mb8MkFnqdud/Mobile_Lotto?node-id=1-2&starting-point-node-id=1%3A2",
      type: "web"
    },
    {
      id: 6,
      title: "On-Screen Keyboard on Desktop & Library JavaScript & Chorme Extension Defend Keylogger",
      description: "แป้นพิมพ์บนหน้าจอที่ป้องกันการโจมตีจาก Keylogger ได้ทั้งในระดับ OS และ Network รองรับทั้งระบบ Windows, Linux(Ubuntu), Library API และ Chrome Extension",
      image: oskIMG,
      category: "fullstack",
      technologies: ["python", "javaScript", "AES"],
      github: "https://github.com/stars/Yossy15/lists/sosk",
      live: "https://loginshp.onrender.com",
      // figma: "https://www.figma.com/proto/6GWVqBH2IP2Mb8MkFnqdud/Mobile_Lotto?node-id=1-2&starting-point-node-id=1%3A2",
      type: "app"
    }
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