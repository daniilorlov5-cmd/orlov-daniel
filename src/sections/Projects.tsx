import { IMG } from '../assets'
import { TGSCOPE_LINK } from '../lib/constants'
import { IconArrow, IconCheck } from './Icons'
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
            Не концепты, а сервисы с пользователями, бюджетами и цифрами.
          </p>
        </div>

        <div className="projects">
          {/* TGScope — главный кейс */}
          <article className="project wide" style={revealStyle(inView, 2)}>
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
              <img src={IMG.tgscope} alt="Главная страница TGScope" loading="lazy" />
            </div>
          </article>

          {/* JPVision CRM */}
          <article className="project" style={revealStyle(inView, 3)}>
            <div className="project-media contain">
              <img src={IMG.crmMobile} alt="Мобильная версия CRM JPVision" loading="lazy" />
            </div>
            <div className="project-body">
              <span className="eyebrow">CRM · JPPROMO</span>
              <h3>JPVision — платформа визуализации рекламных кампаний</h3>
              <p>Собрал команду и разработал продукт с нуля: сбор статистики, графики, анимации интерфейса, прототип мобильной версии. Презентовал Яндексу и МТС.</p>
              <div className="project-tags">
                {['с нуля', 'команда 7', 'графики', 'мобильная версия'].map(t => <span key={t} className="pill">{t}</span>)}
              </div>
            </div>
          </article>

          {/* Telegram Ads Пятёрочка */}
          <article className="project purple on-dark" style={revealStyle(inView, 4)}>
            <div className="project-body">
              <span className="eyebrow">Telegram Ads · кампания</span>
              <h3>Рекламный бюджет TG Ads для «Пятёрочки»</h3>
              <p>Вместе с JPPROMO охватили аудиторию по всей России, удержали стабильную вовлечённость и качество регистраций в бота.</p>
              <div className="kpis">
                {TGADS_KPI.map(k => (
                  <div key={k.l} className={`kpi ${k.acid ? 'acid' : ''}`}>
                    <b>{k.v}</b>
                    <span>{k.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* TruePeople */}
          <article className="project wide dark" style={revealStyle(inView, 5)}>
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

          {/* VibeCoding / HireSpark */}
          <article className="project" style={revealStyle(inView, 6)}>
            <div className="project-media frame">
              <img src={IMG.vibe} alt="Демо сервиса, собранного за неделю" loading="lazy" />
            </div>
            <div className="project-body">
              <span className="eyebrow">AI · собственные продукты</span>
              <h3>HireSpark и MVP за неделю</h3>
              <p>Выпускник курса VibeCoding: сам собираю и проверяю гипотезы от идеи до демо с помощью MCP-инструментов. HireSpark — сервис анализа резюме на Gamma AI 2.0.</p>
              <div className="project-tags">
                {['Gamma AI 2.0', 'MCP', 'MVP за неделю'].map(t => <span key={t} className="pill">{t}</span>)}
              </div>
            </div>
          </article>

          {/* Проектирование */}
          <article className="project" style={revealStyle(inView, 7)}>
            <div className="project-media frame">
              <img src={IMG.design1} alt="Проектирование: карта объектов и сценарии" loading="lazy" />
            </div>
            <div className="project-body">
              <span className="eyebrow">Проектирование</span>
              <h3>50+ структур, флоу и прототипов</h3>
              <p>Карты объектов, CJM, сценарии, архитектуры и ТЗ — под каждый продукт своя структура. Большая часть под NDA, но подход одинаков: сначала логика, потом интерфейс.</p>
              <div className="project-tags">
                {['CJM', 'wireframes', 'архитектура', 'ТЗ'].map(t => <span key={t} className="pill">{t}</span>)}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
