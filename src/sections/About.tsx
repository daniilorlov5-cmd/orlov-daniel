import { IconCheck } from './Icons'
import { revealStyle } from '../lib/reveal'
import { useInView } from '../lib/useInView'

const SKILLS = [
  'Управление продуктом полным циклом: Product Discovery и Delivery, Agile / Scrum / Kanban',
  'Продуктовая аналитика: SQL, Power BI, TGStat, Telegram Ads',
  'Бизнес-модели: P&L, юнит-экономика, интервью, CJM, wireframes',
  'Формирование команды: найм, доукомплектовка, продажи и воронки',
  'Постановка ТЗ, работа с разработкой и дизайном, прототипирование, go-to-market',
]

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div className="container-x" id="about">
      <div ref={ref} className="card">
        <div className="about">
          <div className="about-text">
            <div className="eyebrow" style={revealStyle(inView, 0)}>Обо мне</div>
            <h2 className="h-lg" style={{ marginTop: 12, ...revealStyle(inView, 1) }}>
              Довожу продукт до рынка, а не до презентации
            </h2>
            <div style={{ marginTop: 20, ...revealStyle(inView, 2) }}>
              <p>
                Product Manager с опытом управления полным циклом digital-продуктов: от идеи
                и проектирования до вывода на рынок и масштабирования.
              </p>
              <p className="muted">
                Руководил кросс-функциональными командами до 7 человек — frontend, backend,
                UX/UI. Проводил пользовательские интервью, строил CJM и wireframes, считал
                бизнес-модели и юнит-экономику. Работал как владелец продукта: выстраивал
                процессы, принимал ключевые решения и отвечал за результат.
              </p>
              <p className="muted">
                Умею презентовать продукт так, чтобы он был понятен бизнесу, пользователям
                и техническим командам — от инвест-встреч с Яндексом и МТС до сцены НРФ.
              </p>
            </div>

            <div className="facts" style={revealStyle(inView, 3)}>
              <div className="fact">
                <b>ЯрГУ им. П. Г. Демидова</b>
                <span>Факультет экономики и менеджмента, 2021–2025</span>
              </div>
              <div className="fact">
                <b>Гранты: 1,5 млн ₽</b>
                <span>«Студенческий стартап» и «Умник»</span>
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow" style={revealStyle(inView, 2)}>Навыки</div>
            <div className="skill-list" style={{ marginTop: 14 }}>
              {SKILLS.map((s, i) => (
                <div key={s} className="skill" style={revealStyle(inView, i + 3, { step: 70 })}>
                  <span className="ico"><IconCheck size={14} /></span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
