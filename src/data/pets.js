import barsik from '../assets/pets/barsik.png';
import rex from '../assets/pets/rex.jpg';

export const PETS = [
  {
    id: 1,
    name: 'Барсик',
    description: 'Кот, 3 года. На реабилитации, ищет заботливую семью.',
    photo: barsik,
    urgent: true,
  },
  {
    id: 2,
    name: 'Ляля',
    description: 'Собака, 1 год. Активная и добрая, ищет семью с садом.',
    urgent: false,
  },
  {
    id: 3,
    name: 'Рекс',
    description: 'Пёс, 5 лет. Спокойный, знает команды, ладит с детьми.',
    photo: rex,
    urgent: false,
  },
  {
    id: 4,
    name: 'Мурка',
    description: 'Кошка, 2 года. Ласковая, приучена к лотку, любит сидеть на руках.',
    urgent: true,
  },
  {
    id: 5,
    name: 'Тузик',
    description: 'Пёс, 4 года. Хорошо ходит на поводке.',
    urgent: false,
  },
  {
    id: 6,
    name: 'Соня',
    description: 'Кошка, 7 лет. Спокойная и тихая, подойдёт для квартиры.',
    urgent: false,
  },
];
