import { revealStyle } from '../lib/reveal'
import { useInView } from '../lib/useInView'

type Item = { date: string; title: string; org?: string; desc: string; tags?: string[]; now?: boolean }

const ITEMS: Item[] = [
  {
    date: 'Авг 2025 — сейчас', now: true,
    title: 'AI-продукты: TruePeople и новые сервисы', org: 'собственные проекты',
    desc: 'TruePeople — платформа, которая определяет бот-аудиторию и поднимает качество закупки трафика в Telegram. Параллельно собираю и проверяю новые AI-сервисы от идеи до демо.',
    tags: ['AI', 'Telegram', 'аналитика'],
  },
  {
    date: 'Апр 2024 — Июл 2025',
    title: 'Product / Project Manager', org: 'ООО JPPROMO',
    desc: 'Руководил разработкой digital-сервисов и командой из 7 специалистов. Обновлённый аналитический сервис TGScope и платформа визуализации рекламных кампаний JPVision, реализация бюджета Telegram Ads для «Пятёрочки».',
    tags: ['TGScope', 'JPVision', 'Telegram Ads', 'команда 7'],
  },
  {
    date: 'Дек 2022 — Дек 2023',
    title: 'Международные хакатоны и акселераторы',
    desc: 'Хакатон «Код Мира» в Грозном — сервис для фермеров по доставке продукции без посредников, топ-11 из 81 команды. Акселераторы Сколково и «Цифра». Быстрые гипотезы, MVP-подход, продуктовые решения под реальные задачи.',
    tags: ['Сколково', '«Цифра»', '«Код Мира»'],
  },
  {
    date: 'Авг 2022 — Дек 2022',
    title: '«Виртуальные визитки»', org: 'грант «Студенческий стартап»',
    desc: 'Сервис обмена контактами: от идеи до прототипа. Федеральный грант 1 млн ₽ подтвердил ценность продукта рынку.',
    tags: ['грант 1 млн ₽'],
  },
  {
    date: 'Июн 2022 — Ноя 2022',
    title: '«Умный дом»', org: 'грант «Умник»',
    desc: 'Концепция и MVP цифровой платформы для домов. Победа в конкурсе «Интернет вещей» и 500 тыс. ₽ на развитие продукта.',
    tags: ['грант 500 тыс. ₽', 'IoT'],
  },
  {
    date: 'Ноя 2021 — Мар 2024',
    title: 'Product Owner', org: 'Стартап-студия «Structura»',
    desc: 'Управлял командой разработки, вёл продукты от концепции до MVP. Здесь сложились проектное мышление, лидерство и привычка доводить решения до рынка.',
    tags: ['Product Owner', 'MVP'],
  },
  {
    date: 'Мар 2020 — Авг 2021',
    title: 'Инфопродукты и сообщества',
    desc: 'Продюсировал digital-курсы полным циклом от трафика до сделки, запустил комьюнити «Fight Club» и «Successful Traders» — первые эксперименты с контентом, монетизацией и вовлечением.',
    tags: ['трафик', 'монетизация'],
  },
]

export default function Experience() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div className="container-x" id="experience">
      <div ref={ref} className="card">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={revealStyle(inView, 0)}>Опыт</div>
            <h2 className="h-lg" style={{ marginTop: 12, ...revealStyle(inView, 1) }}>Хронология</h2>
          </div>
          <p className="lead" style={revealStyle(inView, 2)}>
            От первых инфопродуктов в 2020-м до собственных AI-сервисов. Каждая строка — продукт, который дошёл до пользователей.
          </p>
        </div>

        <div className="timeline">
          {ITEMS.map((it, i) => (
            <div key={it.title} className={`tl-item ${it.now ? 'is-now' : ''}`} style={revealStyle(inView, i + 2, { step: 70 })}>
              <div className={`tl-date ${it.now ? 'now' : ''}`}>{it.date}</div>
              <div>
                <div className="tl-title">
                  {it.title}{it.org && <span className="tl-org"> · {it.org}</span>}
                </div>
                <p className="tl-desc">{it.desc}</p>
                {it.tags && (
                  <div className="tl-tags">
                    {it.tags.map(t => <span key={t} className="pill">{t}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
