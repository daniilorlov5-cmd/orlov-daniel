import { useState } from 'react'
import { MINI_APPS, MINI_APPS_FEATURES } from '../lib/miniapps'
import { TG_LINK } from '../lib/constants'
import { IconCheck, IconTelegram } from './Icons'
import { Zoomable } from './Lightbox'
import { revealStyle } from '../lib/reveal'
import { useInView } from '../lib/useInView'

type Props = { compact?: boolean }

/* Портфолио Telegram Mini Apps: пять игр на одном движке. Используется на главной и на странице прайса. */
export default function MiniApps({ compact = false }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [tab, setTab] = useState<'game' | 'rating'>('game')

  return (
    <div className="container-x" id="miniapps">
      <div ref={ref} className="card">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={revealStyle(inView, 0)}>Telegram Mini Apps</div>
            <h2 className="h-lg" style={{ marginTop: 12, ...revealStyle(inView, 1) }}>Пять игр на одном движке</h2>
          </div>
          <p className="lead" style={revealStyle(inView, 2)}>
            Пять самостоятельных ботов с мини-приложениями: своя механика, своя тема, своя база игроков.
            Ядро написано один раз — каждая следующая игра собирается за дни, а не за недели.
          </p>
        </div>

        <div className="apps-toolbar" style={revealStyle(inView, 2)}>
          <div className="apps-tabs" role="tablist">
            <button type="button" role="tab" aria-selected={tab === 'game'} className={tab === 'game' ? 'is-on' : ''} onClick={() => setTab('game')}>Игровой экран</button>
            <button type="button" role="tab" aria-selected={tab === 'rating'} className={tab === 'rating' ? 'is-on' : ''} onClick={() => setTab('rating')}>Рейтинг</button>
          </div>
          <span className="muted apps-hint">Любой экран открывается по клику</span>
        </div>

        <div className="apps-grid">
          {MINI_APPS.map((a, i) => (
            <article key={a.name} className="app" style={revealStyle(inView, i + 3, { step: 70 })}>
              <div className="app-phone">
                <Zoomable src={tab === 'game' ? a.game : a.rating} alt={`${a.name} — ${tab === 'game' ? 'игровой экран' : 'таблица лидеров'}`} loading="lazy" />
              </div>
              <div className="app-body">
                <span className="app-n">{a.n}</span>
                <h3>{a.name}</h3>
                <span className="app-mechanic">{a.mechanic}</span>
                {!compact && <p>{a.desc}</p>}
              </div>
            </article>
          ))}
        </div>

        <div className="apps-foot" style={revealStyle(inView, 8)}>
          <ul className="apps-features">
            {MINI_APPS_FEATURES.map(f => (
              <li key={f}><IconCheck size={14} /> {f}</li>
            ))}
          </ul>
          <div className="apps-cta">
            <p>Стек: JavaScript + SVG/canvas на клиенте, Python/Flask на сервере, изолированные базы, HTTPS, бэкапы и скрипты выкладки.</p>
            <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-ink">
              <IconTelegram size={16} /> Обсудить мини-апп
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
