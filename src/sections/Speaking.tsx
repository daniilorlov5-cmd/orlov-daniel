import { IMG } from '../assets'
import { Zoomable } from './Lightbox'
import { revealStyle } from '../lib/reveal'
import { useInView } from '../lib/useInView'

const TALKS = [
  { img: IMG.talk1, t: 'Крупнейшие рекламные форумы', d: 'Спикер на НРФ, TG Market Conf и отраслевых конференциях: продукты, аналитика Telegram, digital-решения.' },
  { img: IMG.talk2, t: 'Продуктовые доклады и трекинг', d: 'Доклады о разработке сервисов, гипотезах, метриках и бизнес-моделях. Трекинг студенческих команд.' },
  { img: IMG.talk3, t: 'Инвест-встречи с Яндексом и МТС', d: 'Представлял TGScope и JPVision: ценность, экономика, аналитика и потенциал масштабирования.' },
]

const GALLERY = [
  { img: IMG.mic1, c: 'Первый микрофон — первое выступление' },
  { img: IMG.mic2, c: 'Первый инвестор — с этого начинается обязательство' },
  { img: IMG.mic3, c: 'Каждая идея начинается с рамки — внутри неё рождается продукт' },
]

export default function Speaking() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div className="container-x" id="speaking">
      <div ref={ref} className="card">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={revealStyle(inView, 0)}>Выступления</div>
            <h2 className="h-lg" style={{ marginTop: 12, ...revealStyle(inView, 1) }}>Говорю о продукте так, чтобы поняли все</h2>
          </div>
          <p className="lead" style={revealStyle(inView, 2)}>
            Бизнес, пользователи и разработчики слышат один и тот же продукт по-разному. Моя работа — чтобы услышали одно.
          </p>
        </div>

        <div className="talks">
          {TALKS.map((t, i) => (
            <div key={t.t} className="talk" style={revealStyle(inView, i + 2, { step: 90 })}>
              <div className="talk-img"><Zoomable src={t.img} alt={t.t} loading="lazy" /></div>
              <div className="talk-body">
                <h4>{t.t}</h4>
                <p>{t.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery">
          {GALLERY.map((g, i) => (
            <figure key={g.c} style={revealStyle(inView, i + 5, { step: 80 })}>
              <Zoomable src={g.img} alt={g.c} loading="lazy" />
              <figcaption>{g.c}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}
