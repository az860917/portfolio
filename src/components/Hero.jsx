import { useEffect, useRef } from 'react'
import './Hero.css'

const METRICS = [
  { target: 2,  suffix: '+', label: 'YEARS EXP' },
  { target: 40, suffix: '%', label: 'EFFICIENCY UP' },
  { target: 3,  suffix: '+', label: 'PROJECTS' },
]

function useCountUp(ref, target, duration = 1400) {
  useEffect(() => {
    if (!ref.current) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { start = target; clearInterval(timer) }
      if (ref.current) ref.current.textContent = Math.floor(start)
    }, 16)
    return () => clearInterval(timer)
  }, [ref, target, duration])
}

function MetricItem({ target, suffix, label }) {
  const ref = useRef(null)
  useCountUp(ref, target)
  return (
    <div className="metric">
      <span className="metric-val">
        <span ref={ref}>0</span>{suffix}
      </span>
      <span className="metric-label">{label}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="container">
        <div className="hero-eyebrow">FULL-STACK ENGINEER</div>
        <h1 className="hero-name">
          林冠宇
          <span className="hero-name-en">Guan-Yu Lin</span>
        </h1>
        <div className="hero-role">
          <span className="hero-role-sep" />
          <span className="hero-role-text">Python · Flask · React · Socket</span>
        </div>
        <p className="hero-desc">
          具備 <strong>2 年以上後端開發</strong>經驗，擅長{' '}
          <strong>Socket 即時通訊</strong>與 RESTful API 設計。主導 Server 端模組化重構，{' '}
          <strong>開發效率提升 40%</strong>。近期深耕 React 全端，具備從 API 設計到前端呈現的完整能力。
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-main">查看專案</a>
          <a href="#contact" className="btn-ghost">聯絡我</a>
        </div>
        <div className="hero-metrics">
          {METRICS.map(m => <MetricItem key={m.label} {...m} />)}
        </div>
      </div>
      <div className="scroll-hint">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}