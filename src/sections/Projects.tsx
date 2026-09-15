import { IMG } from '../assets'
import { MINI_APPS } from '../lib/miniapps'
import { TGSCOPE_LINK } from '../lib/constants'
import { IconArrow, IconCheck } from './Icons'
import { Zoomable } from './Lightbox'
import { revealStyle } from '../lib/reveal'
import { useInView } from '../lib/useInView'

const TGSCOPE_FEATURES = [
  ['Сбор данных на Rust', 'в 6 раз быстрее — обновление каждые 10 минут по всем каналам'],
  ['400 000+ каналов', 'только реальные, с аудиторией от 100 человек, база растёт автоматически'],
  ['Индекс качества канала', 'запатентованная технология: индексация по 8 ключевым метрикам'],
  ['Метрики под запрос рынка', 'CPM и CPF по каждому каналу, оценка стоимости площадки'],
]

const TP_SIGNALS = [
  { l: 'Дата аватаров', v: 92 },
  { l: 'Активность аккаунта', v: 84 },
  { l: 'Взаимодействия', v: 88 },
  { l: 'Страна регистрации', v: 95 },
  { l: 'Ритм онлайна', v: 76 },
]

const TGADS_KPI = [
  { v: '194 ₽', l: 'за подписчика в бота' },
  { v: '8,67 млн', l: 'рекламный охват' },
  { v: '41,18 %', l: 'ERR — вовлечённость' },
  { v: '1,8 млн ₽', l: 'бюджет кампании', acid: true },
]

const BOARDS = [
  { img: IMG.design1, c: 'Монетизация: сегменты аудитории и CPM по нишам' },
  { img: IMG.design2, c: 'Карта объектов и связей продукта' },
  { img: IMG.design3, c: 'Пользовательские сценарии и флоу' },
  { img: IMG.design4, c: 'Архитектура решения и логика экранов' },
]

export default function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div className="container-x" id="projects">
      <div ref={ref}>
        <div className="section-head" style={{ marginBottom: 24 }}>
          <div>
            <div className="eyebrow" style={revealStyle(inView, 0)}>Проекты</div>
            <h2 className="h-lg" style={{ marginTop: 12, ...revealStyle(inView, 1) }}>Что я запускал</h2>
          </div>
          <p className="lead" style={revealStyle(inView, 2)}>
            Не концепты, а сервисы с пользователями, бюджетами и цифрами. Любую картинку можно открыть.
          </p>
        </div>

        <div className="projects">
          {/* BlackBee — текущий проект */}
          <article className="project wide" style={revealStyle(inView, 2)}>
            <div className="project-body">
              <span className="eyebrow">Product Manager · BlackBee · 2026</span>
              <h3>BlackBee — промышленная 3D-печать и print-on-demand</h3>
              <p>Платформа blackbeesaas.ru для блогеров и селлеров: 3D-модель по идее автора, образец за три дня, печать после оплаты покупателем — без склада и закупки. Студия bbee.store: от одного прототипа до серийных партий, запуск продукта за 48 часов.</p>
              <div className="feature-list">
                <div className="feature"><IconCheck className="ico" size={18} /><span><b>Резидент Сколково</b> — подал заявку и довёл до статуса</span></div>
                <div className="feature"><IconCheck className="ico" size={18} /><span><b>blackbeesaas.ru</b> — контролирую разработку платформы</span></div>
                <div className="feature"><IconCheck className="ico" size={18} /><span><b>bbee.store</b> — сайт студии с калькулятором и 3D-видом, сделан с нуля</span></div>
              </div>
              <div className="project-foot">
                <a href="https://blackbeesaas.ru" target="_blank" rel="noopener noreferrer" className="btn btn-md btn-ink group">
                  blackbeesaas.ru <IconArrow size={16} />
                </a>
                <a href="https://bbee.store" target="_blank" rel="noopener noreferrer" className="btn btn-md btn-soft group" style={{ boxShadow: 'inset 0 0 0 1px var(--line)' }}>
                  bbee.store <IconArrow size={16} />
                </a>
              </div>
            </div>
            <div className="project-media shots-2">
              <Zoomable src={IMG.shotBlackbee} alt="blackbeesaas.ru — главная страница платформы" loading="lazy" />
              <Zoomable src={IMG.shotBbeeStore} alt="bbee.store — сайт студии 3D-печати" loading="lazy" />
            </div>
          </article>

          {/* Telegram Mini Apps — пять игр на одном движке */}
          <article className="project wide" id="miniapps" style={revealStyle(inView, 3)}>
            <div className="project-body">
              <span className="eyebrow">Telegram Mini Apps · 5 игр</span>
              <h3>Пять игр на одном движке</h3>
              <p>Пять самостоятельных ботов с мини-приложениями: своя механика, своя тема, своя база игроков. Ядро написано один раз — каждая следующая игра собирается за дни, а не за недели.</p>
              <div className="feature-list">
                <div className="feature"><IconCheck className="ico" size={18} /><span><b>Удержание</b> — энергия, уровни, множители, ежедневный бонус, задания, лидеры</span></div>
                <div className="feature"><IconCheck className="ico" size={18} /><span><b>Защита</b> — проверка подписи Telegram, лимиты на сервере, нельзя накрутить очки</span></div>
                <div className="feature"><IconCheck className="ico" size={18} /><span><b>Админка</b> — статистика, выгрузка игроков в Excel, сегментированные рассылки</span></div>
              </div>
              <div className="project-tags">
                {MINI_APPS.map(a => <span key={a.name} className="pill">{a.name} · {a.mechanic.toLowerCase()}</span>)}
              </div>
              <div className="project-foot">
                <a href="/price/" className="btn btn-md btn-ink group">
                  Заказать мини-апп <IconArrow size={16} />
                </a>
              </div>
            </div>
            <div className="project-media apps-strip">
              {MINI_APPS.map(a => (
                <Zoomable key={a.name} src={a.game} alt={`${a.name} — игровой экран`} loading="lazy" />
              ))}
            </div>
          </article>

          {/* TGScope — главный кейс */}
          <article className="project wide" style={revealStyle(inView, 3)}>
            <div className="project-body">
              <span className="eyebrow">Аналитика Telegram · JPPROMO</span>
              <h3>TGScope — сервис аналитики Telegram-каналов</h3>
              <p>Обновил продукт как Product Manager: от интервью с фокус-группами до нового UX и модели данных.</p>
              <div className="feature-list">
                {TGSCOPE_FEATURES.map(([b, t]) => (
                  <div key={b} className="feature">
                    <IconCheck className="ico" size={18} />
                    <span><b>{b}</b> — {t}</span>
                  </div>
                ))}
              </div>
              <div className="project-foot">
                <a href={TGSCOPE_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-ink group">
                  Открыть TGScope <IconArrow size={16} />
                </a>
              </div>
            </div>
            <div className="project-media frame">
              <Zoomable src={IMG.tgscope} alt="TGScope — главная страница" loading="lazy" />
            </div>
          </article>

          {/* TruePeople */}
          <article className="project wide dark" style={revealStyle(inView, 3)}>
            <div className="project-body">
              <span className="eyebrow" style={{ color: 'var(--acid)' }}>Anti-fraud · OREON</span>
              <h3>TruePeople — отбор живых каналов для закупки</h3>
              <p>Придуман и разработан под моим руководством. Оценивает аудиторию канала по пяти сигналам и выводит индекс True. Команда закупщиков Oreon отбирает по нему площадки с живой вовлечённой аудиторией — и не платит за ботов.</p>
              <div className="project-tags">
                {['бот-детект', 'индекс True', 'закупка трафика'].map(t => <span key={t} className="pill pill-dark">{t}</span>)}
              </div>
            </div>
            <div className="project-media tp">
              <div className="tp-panel">
                <div className="tp-head">
                  <span>Индекс True</span>
                  <b>87</b>
                </div>
                {TP_SIGNALS.map(sg => (
                  <div key={sg.l} className="tp-row">
                    <span>{sg.l}</span>
                    <div className="tp-bar"><i style={{ width: `${sg.v}%` }} /></div>
                    <em>{sg.v}</em>
                  </div>
                ))}
                <div className="tp-foot">живая аудитория · рекомендован к закупке</div>
              </div>
            </div>
          </article>

          {/* Telegram Ads Пятёрочка */}
          <article className="project wide purple on-dark" style={revealStyle(inView, 4)}>
            <div className="project-body">
              <span className="eyebrow">Telegram Ads · кампания</span>
              <h3>Рекламный бюджет TG Ads для «Пятёрочки»</h3>
              <p>Вместе с JPPROMO охватили аудиторию по всей России, удержали стабильную вовлечённость и качество регистраций в бота.</p>
            </div>
            <div className="project-media kpi-media">
              <div className="kpis kpis-lg">
                {TGADS_KPI.map(k => (
                  <div key={k.l} className={`kpi ${k.acid ? 'acid' : ''}`}>
                    <b>{k.v}</b>
                    <span>{k.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Проектирование — карта досок */}
          <article className="project wide boards-card" style={revealStyle(inView, 5)}>
            <div className="project-body">
              <span className="eyebrow">Проектирование</span>
              <h3>50+ структур, флоу и прототипов</h3>
              <p>Карты объектов, CJM, сценарии, архитектуры и ТЗ — под каждый продукт своя структура. Большая часть под NDA, но подход одинаков: сначала логика, потом интерфейс. Доски открываются по клику.</p>
              <div className="project-tags">
                {['CJM', 'wireframes', 'архитектура', 'ТЗ', 'юнит-экономика'].map(t => <span key={t} className="pill">{t}</span>)}
              </div>
            </div>
            <div className="boards">
              {BOARDS.map(b => (
                <figure key={b.c} className="board">
                  <Zoomable src={b.img} alt={b.c} loading="lazy" />
                  <figcaption>{b.c}</figcaption>
                </figure>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
