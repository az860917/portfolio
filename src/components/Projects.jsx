import './Projects.css'

const PROJECTS = [
  {
    idx: '01', featured: true,
    topBar: 'green',
    name: 'AGV 自動導引車派車系統',
    date: '榮興自動化科技 ｜ 2022–2023',
    desc: '以 Python + Socket 整合 Flask API 控制 AGV 任務排程，支援多台車輛狀態即時監控。使用者可多條件派車、即時確認車輛位置與狀態，並規劃路線避免碰撞。',
    stack: [
      { label: 'Python', cyan: true }, { label: 'Flask', cyan: true },
      { label: 'Socket', cyan: true }, { label: 'MySQL', cyan: true },
      { label: 'RESTful API', cyan: true }, { label: '即時監控儀表板' },
    ],
    bullets: [
      'Socket 雙向通訊，處理高頻 AGV 狀態更新與指令下發',
      '即時監控儀表板，複雜邏輯分析與數據視覺化',
      '跨部門 API 協作，優化任務派發與交通管制穩定性',
    ],
    link: null,
    linkLabel: '企業內部專案 — 無公開連結',
  },
  {
    idx: '02', featured: false,
    name: 'FocusFlow',
    date: '番茄鐘 × 任務管理 PWA ｜ 2026/02',
    desc: '整合番茄鐘與任務清單的生產力工具，支援離線使用、桌面安裝與背景白噪音。',
    stack: [
      { label: 'React' }, { label: 'PWA' },
      { label: 'Web Audio API' }, { label: 'SCSS' },
    ],
    bullets: [
      'Service Worker 支援離線使用與手機端安裝',
      'Web Audio API 精準倒數提示音與白噪音',
      'React Hooks 管理複雜計時器與任務狀態',
    ],
    link: '#',
    linkLabel: '前往查看 →',
  },
  {
    idx: '03', featured: false,
    name: '產品型錄篩選器',
    date: 'React SPA ｜ 2025/03–04',
    desc: '採用 React Hooks 建構的 SPA，模擬電商即時多維度篩選，展示現代前端最佳實踐。',
    stack: [{ label: 'React Hooks' }, { label: 'useMemo' }, { label: 'SPA' }],
    bullets: [
      '類別、庫存、價格多重即時篩選',
      'useMemo 性能優化，避免不必要的重渲染',
      '單向數據流，組件職責清晰分離',
    ],
    link: '#',
    linkLabel: '前往查看 →',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="sec">
      <div className="container">
        <p className="sec-label reveal">FEATURED WORK</p>
        <h2 className="sec-title reveal">專案成就 <span className="dim">—</span></h2>
        <div className="proj-grid">
          {PROJECTS.map(({ idx, featured, topBar, name, date, desc, stack, bullets, link, linkLabel }, i) => (
            <div key={idx} className={`proj-card reveal reveal-d${i}${featured ? ' proj-featured' : ''}`}>
              <div className={`proj-top-bar${topBar ? ' ' + topBar : ''}`} />
              <div className="proj-header">
                <div className="proj-idx">PROJECT // {idx}{featured ? ' — FEATURED' : ''}</div>
                <div className="proj-name">{name}</div>
                <div className="proj-date">{date}</div>
              </div>
              <div className="proj-body">
                <p className="proj-desc">{desc}</p>
                <div className="proj-stack">
                  {stack.map(({ label, cyan }) => (
                    <span key={label} className={`ps${cyan ? ' cyan' : ''}`}>{label}</span>
                  ))}
                </div>
                <ul className="proj-bullets">
                  {bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
              <div className="proj-footer">
                {link
                  ? <a href={link} className="proj-link">{linkLabel}</a>
                  : <span className="proj-link dim">{linkLabel}</span>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}