import './Contact.css'

const CONTACTS = [
  { icon: '📱', label: 'MOBILE',   value: '0922-089-799（10:00–22:00）' },
  { icon: '✉️', label: 'EMAIL',    value: 'forever860917@gmail.com', href: 'mailto:forever860917@gmail.com' },
  { icon: '📍', label: 'LOCATION', value: '台南市 ｜ 可移動至高雄、台中' },
  { icon: '🐙', label: 'GITHUB',   value: '即將更新...', dim: true },
]

const CERTS = [
  '丙級電腦軟體應用技術士',
  '丙級電腦硬體裝修技術士',
  '丙級印前製程—圖文組版 PC',
]

export default function Contact() {
  return (
    <section id="contact" className="sec sec-alt">
      <div className="container">
        <p className="sec-label reveal">GET IN TOUCH</p>
        <h2 className="sec-title reveal">聯絡方式 <span className="dim">—</span></h2>
        <div className="contact-layout">

          <div className="reveal">
            <div className="contact-heading">
              Let's Build<br /><span>Something</span> Together
            </div>
            <p className="contact-sub">
              目前積極尋找軟體工程師職缺，對全端開發、後端系統架構與即時通訊應用特別有熱情。歡迎聯絡討論合作機會！
            </p>
            <div className="c-items">
              {CONTACTS.map(({ icon, label, value, href, dim }) => (
                <div className="c-item card" key={label}>
                  <div className="c-icon">{icon}</div>
                  <div>
                    <div className="c-lbl">{label}</div>
                    <div className={`c-val${dim ? ' c-dim' : ''}`}>
                      {href ? <a href={href}>{value}</a> : value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hire-card reveal reveal-d1">
            <div className="hire-badge">
              <div className="pulse-dot" />
              AVAILABLE FOR HIRE
            </div>
            <div className="hire-title">OPEN TO OPPORTUNITIES</div>
            <p className="hire-desc">
              希望職稱：軟體 / 全端 / 後端工程師<br />
              工作型態：全職・日班<br />
              遠端工作：有意願<br />
              可上班日：錄取後隨時
            </p>
            <a href="mailto:forever860917@gmail.com" className="btn-main">
              寄信給我
            </a>
            <div className="hire-certs">
              {CERTS.map(c => (
                <div className="cert-row" key={c}>{c}</div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}