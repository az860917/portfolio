import './Skills.css'

const CATEGORIES = [
  {
    icon: '⚡', title: 'LANGUAGES & FRAMEWORKS',
    tags: ['Python', 'Flask', 'JavaScript ES6+', 'React (Hooks)', 'HTML5 / CSS3', 'RWD', 'C#', 'C++'],
  },
  {
    icon: '🔌', title: 'BACKEND & COMMUNICATION', variant: 'p',
    tags: ['RESTful API', 'Socket.io', '雙向即時傳輸', 'TCP/IP', 'JSON 處理', '異質系統對接'],
  },
  {
    icon: '🗄️', title: 'DATABASE & DEVOPS', variant: 'g',
    tags: ['MySQL', 'Git / GitHub', 'Linux', 'Shell Script', 'Postman', 'PyInstaller'],
  },
  {
    icon: '📐', title: 'DESIGN & PROJECT TOOLS',
    tags: ['Figma', 'Draw.io', 'Notion', 'VS Code', 'OpenCV', 'PWA'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="sec">
      <div className="container">
        <p className="sec-label reveal">TECH STACK</p>
        <h2 className="sec-title reveal">技術技能 <span className="dim">—</span></h2>
        <div className="skills-grid">
          {CATEGORIES.map(({ icon, title, tags, variant }, i) => (
            <div key={title} className={`skill-block reveal reveal-d${i % 3}`}>
              <div className="sb-header">
                <div className="sb-icon">{icon}</div>
                <div className="sb-title">{title}</div>
              </div>
              <div className="skill-tags">
                {tags.map(t => (
                  <span key={t} className={`st${variant ? ' ' + variant : ''}`}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}