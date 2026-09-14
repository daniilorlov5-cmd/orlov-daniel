import { EMAIL, TG_LINK } from '../lib/constants'
import { IconTelegram } from './Icons'
import { revealStyle } from '../lib/reveal'
import { useInView } from '../lib/useInView'

export default function Cta() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div className="container-x">
      <div ref={ref} className="card-purple on-dark cta">
        <div className="eyebrow" style={revealStyle(inView, 0)}>Готов к сотрудничеству</div>
        <h2 className="h-lg" style={revealStyle(inView, 1)}>Есть продукт, которому нужен человек, отвечающий за результат?</h2>
        <p style={revealStyle(inView, 2)}>Расскажите о задаче — отвечу в тот же день и предложу, с чего начать.</p>
        <div className="cta-actions" style={revealStyle(inView, 3)}>
          <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-acid">
            <IconTelegram size={18} /> Написать в Telegram
          </a>
          <a href={`mailto:${EMAIL}`} className="btn btn-lg btn-ghost">{EMAIL}</a>
        </div>
      </div>
    </div>
  )
}
