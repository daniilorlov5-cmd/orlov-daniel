import { TG_LINK } from '../lib/constants'
import { IconCheck } from './Icons'
import { revealStyle } from '../lib/reveal'
import { useInView } from '../lib/useInView'

type Tier = { n: string; name: string; who: string; items: string[]; flag?: boolean }

const TIERS: Tier[] = [
  {
    n: '01', name: 'Продукт с нуля',
    who: 'Идее, которую нужно довести до MVP и первых пользователей',
    items: ['Диагностика проекта и продуктовые гипотезы', 'Структура продукта и логика решения', 'Дизайн, CJM и первые сценарии', 'Проверка гипотез и сбор обратной связи', 'MVP готов к передаче в разработку'],
  },
  {
    n: '02', name: 'Аналитика и рост',
    who: 'Продукту, который уже работает, но растёт медленнее, чем мог бы',
    items: ['Аудит продуктовых и пользовательских данных', 'Метрики эффективности: LTV / CAC', 'Инсайты из поведения пользователей', 'Дорожная карта улучшений и экспериментов', 'Система решений на данных, PLG'],
  },
  {
    n: '03', name: 'Команда и процессы',
    who: 'Команде, где задачи теряются, а сроки плывут',
    items: ['Аудит разработки и коммуникаций', 'Роли и зоны ответственности', 'Дейлики, планирование, декомпозиция', 'Контроль задач и приоритетов', 'Синхронизация дизайна, продукта и разработки'],
  },
  {
    n: '04', name: 'AI и автоматизации', flag: true,
    who: 'Бизнесу, который хочет внедрить AI туда, где это окупится',
    items: ['Аудит процессов и точки автоматизации', 'Сценарии применения AI под задачи', 'Архитектура решения и прототип', 'Внедрение в рабочие процессы', 'Оценка эффекта от внедрения'],
  },
]

export default function Services() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div className="container-x" id="services">
      <div ref={ref} className="card">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={revealStyle(inView, 0)}>Услуги</div>
            <h2 className="h-lg" style={{ marginTop: 12, ...revealStyle(inView, 1) }}>С чем прихожу в проект</h2>
          </div>
          <p className="lead" style={revealStyle(inView, 2)}>
            Четыре формата работы. Объём и сроки считаем под задачу — напишите, разберём за один созвон.
          </p>
        </div>

        <div className="tiers">
          {TIERS.map((t, i) => (
            <div key={t.name} className={`tier ${t.flag ? 'flag' : ''}`} style={revealStyle(inView, i + 2, { step: 80 })}>
              <div className="tier-n">{t.n}</div>
              <h3>{t.name}</h3>
              <p className="who">{t.who}</p>
              <ul>
                {t.items.map(item => (
                  <li key={item}>
                    <IconCheck className="ico" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className={`btn btn-md ${t.flag ? 'btn-acid' : 'btn-soft'}`}>
                Обсудить задачу
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
