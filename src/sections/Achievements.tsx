import { IMG } from '../assets'
import { IconGrant, IconRocket, IconTrophy } from './Icons'
import { revealStyle } from '../lib/reveal'
import { useInView } from '../lib/useInView'

export default function Achievements() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div className="container-x">
      <div ref={ref} className="card">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={revealStyle(inView, 0)}>Достижения и команда</div>
            <h2 className="h-lg" style={{ marginTop: 12, ...revealStyle(inView, 1) }}>Победы, гранты и люди рядом</h2>
          </div>
        </div>

        <div className="achievements">
          <div className="ach-main" style={revealStyle(inView, 2)}>
            <img src={IMG.hackathon} alt="Команда на хакатоне «Код Мира»" loading="lazy" />
            <div className="ach-overlay">
              <span className="eyebrow" style={{ color: 'var(--acid)' }}>Хакатон «Код Мира» · Грозный · 2023</span>
              <h3>Топ-11 из 81 команды</h3>
              <p>Сервис для фермеров: быстрая и выгодная доставка продукции без посредников. Собрали за хакатон, защитили перед жюри.</p>
              <div className="ach-facts">
                {['Грозный', '2023', '81 команда', 'AgroTech'].map(f => <span key={f} className="pill pill-dark">{f}</span>)}
              </div>
            </div>
          </div>

          <div className="ach-side">
            <div className="ach acid" style={revealStyle(inView, 3)}>
              <span className="ico"><IconGrant size={18} /></span>
              <div>
                <b>1,5 млн ₽ грантов</b>
                <span>«Студенческий стартап» — 1 млн ₽ за «Виртуальные визитки», «Умник» — 500 тыс. ₽ за «Умный дом»</span>
              </div>
            </div>
            <div className="ach" style={revealStyle(inView, 4)}>
              <span className="ico"><IconTrophy size={18} /></span>
              <div>
                <b>Сколково и акселератор «Цифра»</b>
                <span>Победитель и призёр федеральных и международных акселераторов</span>
              </div>
            </div>
            <div className="ach" style={revealStyle(inView, 5)}>
              <span className="ico"><IconRocket size={18} /></span>
              <div>
                <b>Первая команда — Structura, 2021–2024</b>
                <span>Стартап-студия, где я стал Product Owner и собрал первую кросс-функциональную команду</span>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery">
          {[
            { img: IMG.team1, c: 'Structura — первая команда' },
            { img: IMG.team3, c: 'Конференция TGScope с командой' },
            { img: IMG.colleague2, c: 'TGScope — с коллегой на стенде' },
          ].map((g, i) => (
            <figure key={g.c} style={revealStyle(inView, i + 6, { step: 80 })}>
              <img src={g.img} alt="" loading="lazy" />
              <figcaption>{g.c}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}
