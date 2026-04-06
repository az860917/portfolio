import './Experience.css'

const JOBS = [
  {
    role: '資訊維護員', period: '2025/03 — 現在',
    company: '通信佳科技工程有限公司 ｜ 台南市新市區',
    dotClass: '', dim: false,
    bullets: [
      { title: '系統故障排除：', desc: '運用網路診斷工具進行系統排錯，確保企業級監控平台數據傳輸不中斷。' },
      { title: '網路架構維護：', desc: '負責網路設備配置與佈線規劃，具備 TCP/IP 協定實作經驗。' },
    ],
    chips: ['#網路設備配置', '#系統排錯', '#TCP/IP'],
  },
  {
    role: '軟體工程師', period: '2022/06 — 2023/03 ｜ 10個月',
    company: '榮興自動化科技股份有限公司 ｜ 台南市歸仁區',
    dotClass: 'p', dim: false,
    bullets: [
      { title: 'Server 模組化重構：', desc: '主導重構，建立可插拔介面，', highlight: '開發效率提升 40%', descAfter: '，大幅降低維護成本。' },
      { title: '即時通訊系統：', desc: '實作 Socket 雙向數據交換，處理高頻 AGV 狀態更新與控制指令下發。' },
      { title: '數據平台建構：', desc: '整合 Flask、MySQL 與前端，打造即時監控儀表板，支援複雜邏輯分析。' },
      { title: 'API 設計與串接：', desc: '跨部門協作討論 API 格式，優化任務派發與交通管制連線穩定性。' },
    ],
    chips: ['#Python', '#Flask', '#Socket', '#MySQL', '#RESTful API', '#C#'],
  },
  {
    role: '生鮮人員', period: '2020/10 — 2021/11 ｜ 1年2個月',
    company: '全聯實業股份有限公司 ｜ 台北市中山區',
    dotClass: 'muted', dim: true,
    bullets: [{ desc: '在學期間兼職，培養責任感與執行力。' }],
    chips: [],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="sec sec-alt">
      <div className="container">
        <p className="sec-label reveal">WORK HISTORY</p>
        <h2 className="sec-title reveal">工作經歷 <span className="dim">—</span></h2>
        <div className="tl">
          {JOBS.map(({ role, period, company, dotClass, dim, bullets, chips }, i) => (
            <div key={role} className={`tl-item reveal reveal-d${i}`}>
              <div className={`tl-dot${dotClass ? ' ' + dotClass : ''}`} />
              <div className={`exp-card card${dim ? ' exp-dim' : ''}`}>
                <div className="ec-top">
                  <div className="ec-role">{role}</div>
                  <div className="ec-date">{period}</div>
                </div>
                <div className="ec-company">{company}</div>
                <ul className="ec-list">
                  {bullets.map(({ title, desc, highlight, descAfter }, j) => (
                    <li key={j}>
                      {title && <strong>{title}</strong>}
                      {desc}
                      {highlight && <strong className="hl-g">{highlight}</strong>}
                      {descAfter}
                    </li>
                  ))}
                </ul>
                {chips.length > 0 && (
                  <div className="ec-chips">
                    {chips.map(c => <span className="ec-chip" key={c}>{c}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}