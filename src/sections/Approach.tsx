import { revealStyle } from '../lib/reveal'
import { useInView } from '../lib/useInView'

const STEPS = [
  { t: 'Проектирую', d: 'Структура, карта объектов, логика сценариев, прототипы и чёткое ТЗ для команды.' },
  { t: 'Согласовываю', d: 'Ключевые флоу, UX-риски и визуальные решения обсуждаем с командой — и быстро выводим прототип.' },
  { t: 'Декомпозирую', d: 'Груминг, разбор задач, сроки и снятие блокеров до того, как они стали проблемой.' },
  { t: 'Контролирую', d: 'Ежедневно смотрю состояние задач, качество исполнения и соответствие проектированию.' },
  { t: 'Измеряю', d: 'Тесты, метрики, точки роста — и корректировка продукта на фактах, а не на ощущениях.' },
]

export default function Approach() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div className="container-x">
      <div ref={ref} className="card card-purple on-dark" style={{ padding: 'clamp(28px, 4vw, 56px)' }}>
        <div className="section-head">
          <div>
            <div className="eyebrow" style={revealStyle(inView, 0)}>Как я веду продукт</div>
            <h2 className="h-lg" style={{ marginTop: 12, color: '#fff', ...revealStyle(inView, 1) }}>
              Пять шагов — от идеи до метрик
            </h2>
          </div>
          <p className="lead" style={{ color: 'rgba(255,255,255,.72)', ...revealStyle(inView, 2) }}>
            Одна и та же схема на каждом проекте. Она даёт команде предсказуемость, а бизнесу — сроки, которые держатся.
          </p>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <div key={s.t} className="step" style={revealStyle(inView, i + 2, { step: 80 })}>
              <div className="step-n">0{i + 1}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
