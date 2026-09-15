import { useState } from 'react'
import { IMG } from '../assets'
import { EMAIL, TG_LINK, VK_LINK } from '../lib/constants'
import { IconArrow, IconMail, IconTelegram } from './Icons'
import { revealStyle } from '../lib/reveal'
import { useInView } from '../lib/useInView'

export default function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>('0px')
  const [flipped, setFlipped] = useState(false)

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
              <a href="/price/" className="btn btn-lg btn-acid btn-glow">
                Прайс <IconArrow size={18} />
              </a>
              <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="hero-contact">
                <span className="ico"><IconTelegram size={15} /></span>
                <span>
                  <b>@orlovdaniel</b>
                  <span>написать в Telegram</span>
                </span>
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

          {/* Фото переворачивается при наведении; на тач-экранах — по тапу */}
          <div className="hero-photo" style={revealStyle(inView, 1, { y: 24 })}>
            <div
              className={`flip ${flipped ? 'is-flipped' : ''}`}
              onClick={() => setFlipped(v => !v)}
              role="button"
              tabIndex={0}
              aria-label="Перевернуть карточку"
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlipped(v => !v) } }}
            >
              <div className="flip-inner">
                <div className="flip-face hero-photo-card">
                  <img src={IMG.hero} alt="Даниил Орлов" width={840} height={1050} />
                </div>
                <div className="flip-face flip-back">
                  <div className="flip-back-content">
                    <span className="eyebrow">Готов к сотрудничеству</span>
                    <h3>Product Manager с опытом создания успешных digital-продуктов</h3>
                    <p>Напишите — отвечу в тот же день и предложу, с чего начать.</p>
                    <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-acid" onClick={e => e.stopPropagation()}>
                      <IconTelegram size={16} /> Написать в Telegram
                    </a>
                    <div className="flip-links">
                      <a href={`mailto:${EMAIL}`} onClick={e => e.stopPropagation()}>{EMAIL}</a>
                      <a href={VK_LINK} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>VK · daniil824525</a>
                    </div>
                  </div>
                </div>
              </div>
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
