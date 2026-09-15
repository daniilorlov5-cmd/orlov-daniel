import { IMG } from '../assets'

export type MiniApp = {
  n: string
  name: string
  mechanic: string
  desc: string
  game: string
  rating: string
}

/* Пять Telegram-игр на одном движке — описания из материалов проекта */
export const MINI_APPS: MiniApp[] = [
  {
    n: '01', name: 'Футбол', mechanic: 'Комбо за скорость',
    desc: 'Серия быстрых ударов поднимает множитель. Мяч летит по дуге в ворота, сетка отыгрывает попадание.',
    game: IMG.appFootballGame, rating: IMG.appFootballRating,
  },
  {
    n: '02', name: 'Баскетбол', mechanic: 'Тайминг',
    desc: 'По шкале ходит бегунок. Попадание в зелёную зону даёт тройное очко — мяч проходит сквозь сетку, промах — отскок от дужки.',
    game: IMG.appBasketballGame, rating: IMG.appBasketballRating,
  },
  {
    n: '03', name: 'Бокс', mechanic: 'Серия и спецудар',
    desc: 'Непрерывная серия ударов растит силу. Накопленный спецудар даёт шестикратный множитель: груша загорается, экран трясёт.',
    game: IMG.appBoxingGame, rating: IMG.appBoxingRating,
  },
  {
    n: '04', name: 'Тренажёрный зал', mechanic: 'Ритм',
    desc: 'Кольцо сходится к цели в такт. Попал в ритм — атлет выжимает штангу над головой, мимо — штанга только дёргается.',
    game: IMG.appGymGame, rating: IMG.appGymRating,
  },
  {
    n: '05', name: 'Гонки', mechanic: 'Удержание темпа',
    desc: 'Тап слева и справа — перестроение и газ. Сопротивление растёт как квадрат скорости, выше 300 км/ч каждая сотня даётся тяжелее.',
    game: IMG.appRacingGame, rating: IMG.appRacingRating,
  },
]

export const MINI_APPS_FEATURES = [
  'Энергия, уровни и множители',
  'Ежедневный бонус с растущей серией',
  'Задания с прогрессом и наградами',
  'Таблица лидеров на 50 мест',
  'Проверка подписи Telegram initData',
  'Защита от накрутки на сервере',
  'Админка: статистика, выгрузка в Excel, рассылки',
  'Векторная графика — чётко на любом экране',
]
