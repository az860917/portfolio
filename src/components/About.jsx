import './About.css'

const INFO = [
  { key: '年齡',     val: '28 歲' },
  { key: '學歷',     val: '南臺科技大學 電子系' },
  { key: '現職',     val: '資訊維護員（在職中）' },
  { key: '所在地',   val: '台南市' },
  { key: '期望職稱', val: '工程師（全端 / 後端）' },
  { key: '期望地點', val: '台南・高雄・台中' },
  { key: '遠端工作', val: '有意願 ✓', green: true },
]

export default function About() {
  return (
    <section id="about" className="sec sec-alt">
      <div className="container">
        <p className="sec-label reveal">ABOUT ME</p>
        <h2 className="sec-title reveal">關於我 <span className="dim">—</span></h2>
        <div className="about-layout">
          <div className="info-card reveal">
            <div className="info-card-head">
              <div className="info-card-name">林冠宇</div>
              <div className="info-card-sub">// Software Engineer</div>
            </div>
            <div className="info-card-body">
              {INFO.map(({ key, val, green }) => (
                <div className="info-row" key={key}>
                  <span className="ir-key">{key}</span>
                  <span className="ir-val" style={green ? { color: 'var(--green)' } : {}}>{val}</span>
                </div>
              ))}
            </div>
            <div className="chip-row">
              <span className="chip chip-c">團隊合作</span>
              <span className="chip chip-p">邏輯思考</span>
              <span className="chip chip-g">自我學習</span>
            </div>
          </div>

          <div className="reveal reveal-d1">
            <div className="about-prose">
              <p>
                畢業於<strong className="hl-w">南臺科技大學電子工程系</strong>，電子系的訓練讓我能從底層架構理解數據流向，培養了嚴謹的邏輯思考能力。
              </p>
              <p>
                專精於 <strong className="hl-c">Python 後端開發</strong>，具備 2 年以上軟硬體系統整合實務經驗。在榮興自動化科技任職期間，主導 Server 端的模組化重構，透過重新設計標準化介面與可插拔式模組架構，成功將團隊開發效率提升 <strong className="hl-g">40%</strong>，並大幅降低維護成本。
              </p>
              <p>
                對新技術保持高度熱誠，近期深耕 <strong className="hl-p">React 前端框架</strong>，完成 FocusFlow（番茄鐘 PWA）、產品篩選 SPA 等個人專案，具備串接完整全端數據流的實戰能力。
              </p>
              <p>
                目前的維護經歷磨練了快速定位問題的敏銳度，在軟體開發排錯中是極大的優勢。期望能加入優秀的軟體團隊，貢獻在系統重構、即時通訊與全端整合的專長。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}