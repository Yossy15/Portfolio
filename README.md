# Portfolio Website - เว็บไซต์แสดงผลงาน

เว็บไซต์แสดงผลงานส่วนตัวที่สร้างด้วย React JS และ CSS โดยออกแบบให้รองรับการแสดงผลบนคอมพิวเตอร์ โทรศัพท์ และแท็บเล็ต

## ✨ คุณสมบัติ

- **Responsive Design** - รองรับการแสดงผลบนทุกอุปกรณ์
- **Modern UI/UX** - ออกแบบด้วย UI ที่ทันสมัยและใช้งานง่าย
- **Smooth Animations** - มีการเคลื่อนไหวที่นุ่มนวลและสวยงาม
- **Interactive Components** - คอมโพเนนต์ที่โต้ตอบได้
- **Contact Form** - ฟอร์มติดต่อที่ใช้งานได้จริง
- **Project Showcase** - แสดงผลงานพร้อมระบบกรอง
- **Skills Display** - แสดงทักษะและความเชี่ยวชาญ

## 🚀 การติดตั้งและใช้งาน

### ข้อกำหนดเบื้องต้น
- Node.js (เวอร์ชัน 14 หรือใหม่กว่า)
- npm หรือ yarn

### ขั้นตอนการติดตั้ง

1. **Clone โปรเจค**
```bash
git clone <repository-url>
cd portfolio-website
```

2. **ติดตั้ง Dependencies**
```bash
npm install
```

3. **รันโปรเจคในโหมด Development**
```bash
npm start
```

เว็บไซต์จะเปิดที่ `http://localhost:3000`

4. **Build สำหรับ Production**
```bash
npm run build
```

## 📁 โครงสร้างโปรเจค

```
src/
├── components/          # React Components
│   ├── Header.js       # Navigation Header
│   ├── Hero.js         # Hero Section
│   ├── About.js        # About Section
│   ├── Skills.js       # Skills Section
│   ├── Projects.js     # Projects Section
│   ├── Contact.js      # Contact Section
│   └── Footer.js       # Footer
├── App.js              # Main App Component
├── index.js            # Entry Point
└── index.css           # Global Styles
```

## 🎨 การปรับแต่ง

### เปลี่ยนข้อมูลส่วนตัว

1. **ข้อมูลใน Hero Section** - แก้ไขใน `src/components/Hero.js`
2. **ข้อมูลใน About Section** - แก้ไขใน `src/components/About.js`
3. **ข้อมูลการติดต่อ** - แก้ไขใน `src/components/Contact.js`
4. **ลิงก์ Social Media** - แก้ไขในทุกคอมโพเนนต์ที่เกี่ยวข้อง

### เปลี่ยนสีและธีม

แก้ไข CSS Variables ในไฟล์ CSS ต่างๆ:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #2c3e50;
  --background-color: #f8f9fa;
}
```

### เพิ่มผลงานใหม่

แก้ไขใน `src/components/Projects.js`:

```javascript
const projects = [
  {
    id: 7,
    title: "ชื่อโปรเจคใหม่",
    description: "คำอธิบายโปรเจค",
    image: "URL รูปภาพ",
    category: "frontend", // หรือ "backend", "fullstack"
    technologies: ["React", "Node.js"],
    github: "GitHub URL",
    live: "Live Demo URL",
    type: "web" // หรือ "mobile", "api"
  }
];
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🛠️ เทคโนโลยีที่ใช้

- **Frontend**: React.js
- **Styling**: CSS3 (Custom CSS)
- **Icons**: React Icons
- **Build Tool**: Create React App

## 📞 การติดต่อ

หากมีคำถามหรือต้องการความช่วยเหลือ สามารถติดต่อได้ที่:
- Email: your.email@example.com
- Phone: +66 8X XXX XXXX

## 📄 License

โปรเจคนี้เป็น Open Source และสามารถใช้งานได้อย่างอิสระ

---

สร้างด้วย ❤️ โดย React 