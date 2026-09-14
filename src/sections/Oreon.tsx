import { IMG } from '../assets'
import { IconArrow } from './Icons'
import { Zoomable } from './Lightbox'
import { revealStyle } from '../lib/reveal'
import { useInView } from '../lib/useInView'

type Product = {
  name: string
  eyebrow: string
  desc: string
  facts: string[]
  shots: { src: string; alt: string }[]
  dark?: boolean
}

/* Цифры — из описаний продуктов, измерены по коду и базе */
const PRODUCTS: Product[] = [
  {
    name: 'Портал Oreon Group',
    eyebrow: 'Единый вход',
    desc: 'Зонтичный кабинет над всеми сервисами агентства: один логин, сквозной вход по одноразовому пропуску, права поштучно на каждый блок. Внутри — задачи команды, CRM клиентов, платежи и маркетинговая статистика. Есть Android-приложение.',
    facts: ['7 блоков', '4 сервиса по SSO', '137 ручек API', 'NestJS + Nuxt 3'],
    shots: [
      { src: IMG.shotPortal, alt: 'Портал Oreon Group — дашборд сервисов' },
    ],
  },
  {
    name: 'Oreonsee — CRM рекламных кампаний',
    eyebrow: 'Закупка в Telegram',
    desc: 'От плана закупки до отчёта клиенту: кампания с бюджетом и KPI, размещения по каналам и датам, факт охватов и переходов, CPM и стоимость лида считаются сами. Три роли — владелец, менеджер, клиент со своим кабинетом.',
    facts: ['13 разделов', '73 ручки API', 'PostgreSQL + ClickHouse', '~17 000 строк кода'],
    shots: [
      { src: IMG.shotOreonsee, alt: 'Oreonsee — обзор кампании: KPI, бюджет, динамика' },
    ],
    dark: true,
  },
  {
    name: 'Leadly — поиск и обработка лидов',
    eyebrow: 'Telegram-аутрич',
    desc: 'Подключённые аккаунты читают профильные чаты и находят людей, которые прямо сейчас ищут подрядчика. Рассыльщики пишут первыми, переписку ведёт AI-агент и передаёт живому менеджеру, когда разговор дозрел. Прогрев, темп и дневные лимиты встроены — аккаунты не улетают в бан.',
    facts: ['9 разделов', '19 этапов роадмапа', 'MTProto + BullMQ', 'AI-агент в диалогах'],
    shots: [{ src: IMG.shotLeadly, alt: 'Leadly — диалоги с лидами' }],
  },
  {
    name: 'Пушка — контент-фабрика',
    eyebrow: 'pushka.ai',
    desc: 'Один ролик-исходник превращается в набор уникализированных креативов, проходит одобрение и уходит в публикацию по расписанию на сетку аккаунтов TikTok, Instagram и YouTube. Метрики возвращаются в дашборд кампании.',
    facts: ['10 разделов', '3 площадки', '4 пресета уникализации', 'FastAPI + Next.js 16'],
    shots: [
      { src: IMG.shotPushka, alt: 'Пушка — креативы на одобрении' },
    ],
  },
]

export default function Oreon() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div className="container-x" id="oreon">
      <div ref={ref} className="card">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={revealStyle(inView, 0)}>Кофаундер · Oreon</div>
            <h2 className="h-lg" style={{ marginTop: 12, ...revealStyle(inView, 1) }}>Рекламное агентство и его продуктовая линейка</h2>
          </div>
          <p className="lead" style={revealStyle(inView, 2)}>
            Oreon — агентство рекламы в Telegram и детекта ботового трафика. Я кофаундер и отвечаю за продукт: пять сервисов, собранных в единую экосистему.
          </p>
        </div>

        <div className="oreon-intro" style={revealStyle(inView, 2)}>
          <div className="oreon-intro-text">
            <p>
              У агентства пять самостоятельных продуктов на разных стеках — CRM кампаний, поиск лидов,
              контент-фабрика, сервис роста Читкод и TruePeople. Портал связывает их единым входом:
              сотрудник логинится один раз и проваливается в нужный сервис без второго пароля.
            </p>
            <p className="muted">
              На снимках — демонстрационные данные: показаны возможности систем, а не отчёты по кампаниям клиентов.
            </p>
          </div>
          <a href="https://oreons.ru" target="_blank" rel="noopener noreferrer" className="btn btn-md btn-purple group">
            oreons.ru <IconArrow size={16} />
          </a>
        </div>

        <div className="oreon-grid">
          {PRODUCTS.map((p, i) => (
            <article key={p.name} className={`oreon-product ${p.dark ? 'dark' : ''}`} style={revealStyle(inView, i + 3, { step: 90 })}>
              <div className="oreon-product-body">
                <span className="eyebrow">{p.eyebrow}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.facts.map(f => <span key={f} className={`pill ${p.dark ? 'pill-dark' : ''}`}>{f}</span>)}
                </div>
              </div>
              <div className={`oreon-shots ${p.shots.length > 1 ? 'two' : ''}`}>
                {p.shots.map(s => (
                  <div key={s.src} className="oreon-shot">
                    <Zoomable src={s.src} alt={s.alt} loading="lazy" />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
