import { IMG } from '../assets'
import { EMAIL, TG_LINK } from '../lib/constants'
import { IconMail, IconTelegram } from './Icons'
import { revealStyle } from '../lib/reveal'
import { useInView } from '../lib/useInView'

export default function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>('0px')

  return (
    <div className="hero-wrap" id="top">
      <div className="container-x">
        <div ref={ref} className="hero">
          <div>
            <div className="hero-box" style={revealStyle(inView, 0, { y: 14 })}>
              <h1 className="h-xl">
                Даниил Орлов<br />
                <span className="accent">Product Manager</span><span className="caret" />
              </h1>
            </div>

            <p className="hero-lead" style={revealStyle(inView, 1)}>
              Веду digital-продукты полным циклом: от гипотез и проектирования до запуска
              и роста. Решения — на данных и логике, ответственность — за продукт и команду.
            </p>

            <div className="hero-actions" style={revealStyle(inView, 2)}>
              <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-acid">
                <IconTelegram size={18} /> Написать в Telegram
              </a>
              <a href={`mailto:${EMAIL}`} className="hero-contact">
                <span className="ico"><IconMail size={15} /></span>
                <span>
                  <b>{EMAIL}</b>
                  <span>отвечаю в тот же день</span>
                </span>
              </a>
            </div>
          </div>

          <div className="hero-photo" style={revealStyle(inView, 1, { y: 24 })}>
            <div className="hero-photo-card">
              <img src={IMG.hero} alt="Даниил Орлов" width={840} height={1050} />
            </div>
            <div className="hero-chip tl">
              <b>5+</b>
              <small>лет в продукте</small>
            </div>
            <div className="hero-chip br acid">
              <b>12</b>
              <small>запущенных продуктов</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
