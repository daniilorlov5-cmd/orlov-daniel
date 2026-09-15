import Header from '../sections/Header'
import Footer from '../sections/Footer'
import Lightbox from '../sections/Lightbox'
import MiniApps from '../sections/MiniApps'
import { IMG } from '../assets'
import { EMAIL, TG_LINK } from '../lib/constants'
import { IconArrow, IconCheck, IconTelegram } from '../sections/Icons'
import { revealStyle } from '../lib/reveal'
import { useInView } from '../lib/useInView'

type Item = {
  name: string
  price: string
  unit?: string
  term: string
  desc: string
  includes: string[]
  hot?: boolean
}

type Group = { title: string; sub: string; items: Item[] }

/* Цены — «от». Точная сумма и срок — после разбора задачи. */
const GROUPS: Group[] = [
  {
    title: 'Telegram-разработка',
    sub: 'От простого бота до игрового мини-приложения с удержанием. Всё, что показано в портфолио ниже, делаю сам.',
    items: [
      {
        name: 'Telegram Mini App', price: 'от 35 000 ₽', term: 'от 3 дней', hot: true,
        desc: 'Полноценное мини-приложение внутри Telegram: интерфейс, логика, сервер, авторизация через Telegram.',
        includes: ['Концепция и структура экранов', 'Фронтенд + бэкенд', 'Проверка подписи initData', 'Выкладка на сервер, HTTPS'],
      },
      {
        name: 'Telegram-бот', price: 'от 15 000 ₽', term: 'от 1 дня',
        desc: 'Бот под задачу: заявки, воронка, рассылки, поддержка, интеграции. Цена зависит от функционала.',
        includes: ['Сценарий и тексты', 'Кнопки, меню, состояния', 'Админка и рассылки', 'Подключение CRM или таблиц'],
      },
      {
        name: 'Игровой мини-апп с механикой', price: 'от 60 000 ₽', term: 'от 7 дней',
        desc: 'Как в портфолио ниже: игра с энергией, уровнями, заданиями и рейтингом. Удерживает аудиторию и растит бота.',
        includes: ['Своя механика и оформление', 'Ежедневный бонус, задания, лидеры', 'Защита от накрутки', 'Статистика и выгрузка игроков'],
      },
    ],
  },
  {
    title: 'Продвижение',
    sub: 'Посевы, Telegram Ads и контент — то, чем занимаюсь в агентстве Oreon каждый день. Одна цена на любую задачу продвижения.',
    items: [
      {
        name: 'Любое продвижение под ключ', price: '150 000 ₽', term: 'старт за 3 дня', hot: true,
        desc: 'Посевы в Telegram-каналах, Telegram Ads, контент — беру задачу целиком и веду до результата. Каналы проверяю на ботов через TruePeople, чтобы бюджет уходил на живых людей.',
        includes: ['Посевы: подбор каналов, закупка, контроль выходов', 'Telegram Ads: настройка, креативы, ведение', 'Проверка площадок на ботовый трафик', 'Отчёт по охватам, CPM и лидам'],
      },
      {
        name: 'Пушка — контент-фабрика', price: 'в составе продвижения', term: 'от 5 дней',
        desc: 'Один ролик-исходник превращается в десятки уникализированных креативов и уходит по расписанию на сетку аккаунтов TikTok, Instagram и YouTube. Метрики возвращаются в один дашборд.',
        includes: ['Сетка аккаунтов и расписание', 'Уникализация креативов', 'Одобрение перед публикацией', 'Метрики по каждому ролику'],
      },
    ],
  },
  {
    title: 'Сайты и лендинги',
    sub: 'Отдельный прайс на сайты: от одностраничника под рекламу до сайта компании.',
    items: [
      {
        name: 'Лендинг', price: '15 000 ₽', term: 'от 3 дней', hot: true,
        desc: 'Одностраничник под конкретную цель: заявки, регистрации, продажи. Со стратегией — что говорим, кому и в каком порядке.',
        includes: ['Стратегия лендинга: оффер, структура, аргументы', 'Дизайн в едином стиле', 'Форма заявки, аналитика', 'Домен, хостинг, HTTPS'],
      },
      {
        name: 'Сайт компании', price: 'от 45 000 ₽', term: 'от 10 дней',
        desc: 'Многостраничный сайт: услуги, кейсы, о компании, контакты. Такой, как этот, — собран мной от идеи до кода.',
        includes: ['Структура и тексты', 'Дизайн и адаптив', 'SEO-база и скорость', 'Панель для правок или простой код'],
      },
    ],
  },
  {
    title: 'Автоматизация',
    sub: 'Рутина, которую делают руками, превращается в процесс, который работает сам.',
    items: [
      {
        name: 'Любая автоматизация под запрос', price: '50 000 ₽', term: 'от 5 дней', hot: true,
        desc: 'Пример: лиды. Аккаунты читают профильные чаты, находят людей, которые ищут подрядчика, пишут первыми, переписку ведёт AI-агент и передаёт менеджеру — так работает мой Leadly. Но задача может быть любой: отчёты, CRM, рассылки, интеграции.',
        includes: ['Разбор процесса и точки автоматизации', 'Сценарий и прототип', 'Внедрение: боты, AI-агенты, интеграции', 'Обучение команды и поддержка'],
      },
    ],
  },
  {
    title: 'Продукт и рост',
    sub: 'Форматы из раздела «Услуги» — с ориентиром по цене.',
    items: [
      {
        name: 'Продукт с нуля', price: 'от 80 000 ₽', term: 'от 10 дней',
        desc: 'От идеи до MVP, готового к передаче в разработку: гипотезы, структура, CJM, ТЗ.',
        includes: ['Диагностика и гипотезы', 'Структура продукта и логика', 'Дизайн-концепция и сценарии', 'ТЗ для команды'],
      },
      {
        name: 'Аналитика и рост', price: 'от 50 000 ₽', term: 'от 7 дней',
        desc: 'Аудит данных продукта и дорожная карта улучшений на фактах.',
        includes: ['Аудит метрик и воронок', 'LTV / CAC, юнит-экономика', 'Инсайты из поведения пользователей', 'План экспериментов'],
      },
      {
        name: 'Команда и процессы', price: 'от 60 000 ₽', term: 'от 14 дней',
        desc: 'Настраиваю разработку так, чтобы задачи не терялись, а сроки держались.',
        includes: ['Аудит коммуникаций', 'Роли и зоны ответственности', 'Планирование и декомпозиция', 'Контроль приоритетов'],
      },
    ],
  },
  {
    title: 'Сколково и полное ведение',
    sub: 'Форматы для тех, кому нужен не отдельный результат, а человек, отвечающий за весь путь.',
    items: [
      {
        name: 'Заявка в фонд «Сколково»', price: 'от 100 000 ₽', term: 'от 14 дней', hot: true,
        desc: 'Резидентство под ключ для любой компании: сам прошёл этот путь с BlackBee. Позиция договорная.',
        includes: ['Концепция проекта с нуля', 'Описание инновации и рынка', 'Пакет документов и подача', 'Сопровождение до решения'],
      },
      {
        name: 'Product Owner full-time', price: '250 000 ₽', unit: '/ мес', term: 'выход за 1 неделю',
        desc: 'Веду продукт целиком: команда, приоритеты, метрики, релизы. Отвечаю за результат, а не за процесс.',
        includes: ['Стратегия и бэклог', 'Управление разработкой и дизайном', 'Метрики и решения на данных', 'Отчётность бизнесу'],
      },
    ],
  },
]

function PriceHero() {
  const { ref, inView } = useInView<HTMLDivElement>('0px')
  return (
    <div className="price-hero" id="top">
      <div className="container-x">
        <div ref={ref} className="price-hero-grid">
          <div>
            <div className="eyebrow" style={revealStyle(inView, 0)}>Прайс · 2026</div>
            <h1 className="h-xl" style={revealStyle(inView, 1)}>
              Сколько стоит<br /><span className="accent-purple">сделать правильно</span>
            </h1>
            <p className="lead" style={revealStyle(inView, 2)}>
              Цены — «от», сроки — минимальные для простого объёма. К каждой задаче подхожу максимально
              ответственно: сначала разбираю запрос, потом называю точную сумму и срок.
            </p>
            <div className="price-hero-actions" style={revealStyle(inView, 3)}>
              <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-purple">
                <IconTelegram size={18} /> Написать в Telegram
              </a>
              <a href={`mailto:${EMAIL}`} className="btn btn-lg btn-soft price-mail">{EMAIL}</a>
            </div>
            <div className="price-hero-notes" style={revealStyle(inView, 4)}>
              <span><IconCheck size={14} /> Договор и закрывающие документы</span>
              <span><IconCheck size={14} /> Предоплата 50 %, остальное по факту</span>
              <span><IconCheck size={14} /> Правки в рамках ТЗ — без доплат</span>
            </div>
          </div>
          <div className="price-sketch" style={revealStyle(inView, 2, { y: 24 })}>
            <video src="/portrait.mp4" poster={IMG.videoPoster} autoPlay muted loop playsInline preload="auto" aria-label="Даниил Орлов" />
            <div className="price-sketch-tag">
              <b>orlovdaniel</b>
              <small>product · telegram · ai</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PriceList() {
  const { ref, inView } = useInView<HTMLDivElement>()
  let k = 0
  return (
    <div className="container-x" id="list">
      <div ref={ref} className="price-groups">
        {GROUPS.map(g => (
          <section key={g.title} className="price-group">
            <div className="price-group-head" style={revealStyle(inView, k++)}>
              <h2 className="h-md">{g.title}</h2>
              <p className="muted">{g.sub}</p>
            </div>
            <div className="price-items">
              {g.items.map(it => (
                <article key={it.name} className={`price-item ${it.hot ? 'hot' : ''}`} style={revealStyle(inView, k++, { step: 60 })}>
                  <div className="price-item-top">
                    <div>
                      <h3>{it.name}</h3>
                      <p>{it.desc}</p>
                    </div>
                    <div className="price-tag">
                      <b>{it.price}{it.unit && <small>{it.unit}</small>}</b>
                      <span>{it.term}</span>
                    </div>
                  </div>
                  <ul className="price-includes">
                    {it.includes.map(x => <li key={x}><IconCheck size={13} /> {x}</li>)}
                  </ul>
                  <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="price-item-link group">
                    Обсудить задачу <IconArrow size={14} />
                  </a>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default function Price() {
  return (
    <>
      <Header home={false} />
      <PriceHero />
      <main className="stack" style={{ paddingTop: 8 }}>
        <PriceList />
        <MiniApps />
        <div className="container-x">
          <div className="card-purple on-dark cta">
            <div className="eyebrow">Не нашли свой формат?</div>
            <h2 className="h-lg">Опишите задачу — соберу предложение под неё</h2>
            <p>Отвечаю в тот же день. Если задача не моя — так и скажу и подскажу, к кому идти.</p>
            <div className="cta-actions">
              <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-acid">
                <IconTelegram size={18} /> Написать в Telegram
              </a>
              <a href="/" className="btn btn-lg btn-ghost">На главную</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Lightbox />
    </>
  )
}
