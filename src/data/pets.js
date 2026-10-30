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
];
