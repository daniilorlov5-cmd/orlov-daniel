import { revealStyle } from '../lib/reveal'
import { useInView } from '../lib/useInView'

const STATS = [
  { n: '12', title: 'Запущенных продуктов и сервисов', sub: 'от идеи до MVP: «Умный дом», «Виртуальные визитки», TGScope, JPVision, HireSpark, TruePeople' },
  { n: '5', plus: true, title: 'Лет в продуктовой разработке', sub: 'с 2020 года: инфопродукты → Structura → JPPROMO → AI-проекты' },
  { n: '30', plus: true, title: 'Специалистов в моих командах', sub: 'frontend, backend, data, design, sales, аналитики' },
  { n: '50', plus: true, title: 'Проектирований и продуктовых решений', sub: 'CJM, флоу, архитектуры, сценарии, прототипы' },
]

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div className="container-x">
      <div ref={ref} className="card">
        <div className="stats">
          {STATS.map((s, i) => (
            <div key={s.title} className="stat" style={revealStyle(inView, i, { step: 80 })}>
              <div className="stat-num">{s.n}{s.plus && <sup>+</sup>}</div>
              <div className="stat-title">{s.title}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
