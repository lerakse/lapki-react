require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Pet = require('./models/Pet');

const PETS = [
  {
    name: 'Барсик',
    species: 'cat',
    age: 3,
    description: 'Кот, 3 года. На реабилитации, ищет заботливую семью.',
    story: 'Барсика нашли зимой у подъезда с травмой лапы. Сейчас он живёт у волонтёра на передержке и почти восстановился.',
    traits: ['привит', 'кастрирован', 'приучен к лотку'],
    photo: '/pets/barsik.png',
    urgent: true,
  },
  {
    name: 'Ляля',
    species: 'dog',
    age: 1,
    description: 'Собака, 1 год. Активная и добрая, ищет семью с садом.',
    story: 'Ляля попала в приют щенком. Любит долгие прогулки и игры с мячом, поэтому ей подойдёт дом с двором.',
    traits: ['привита', 'стерилизована', 'ладит с собаками'],
  },
  {
    name: 'Рекс',
    species: 'dog',
    age: 5,
    description: 'Пёс, 5 лет. Спокойный, знает команды, ладит с детьми.',
    story: 'Рекс жил в семье, но хозяева переехали и не смогли взять его с собой. Знает команды «сидеть», «рядом» и «место».',
    traits: ['привит', 'кастрирован', 'знает команды'],
    photo: '/pets/rex.jpg',
  },
  {
    name: 'Мурка',
    species: 'cat',
    age: 2,
    description: 'Кошка, 2 года. Ласковая, приучена к лотку, любит сидеть на руках.',
    story: 'Мурку принесли в приют вместе с котятами, котята уже нашли дом. Ей срочно нужна семья до конца месяца.',
    traits: ['привита', 'стерилизована', 'приучена к лотку'],
    urgent: true,
  },
  {
    name: 'Тузик',
    species: 'dog',
    age: 4,
    description: 'Пёс, 4 года. Хорошо ходит на поводке.',
    story: 'Тузик — бывший дворовый сторож. Спокойно относится к другим собакам и быстро привыкает к людям.',
    traits: ['привит', 'кастрирован', 'ходит на поводке'],
  },
  {
    name: 'Соня',
    species: 'cat',
    age: 7,
    description: 'Кошка, 7 лет. Спокойная и тихая, подойдёт для квартиры.',
    story: 'Соня осталась без дома после смерти хозяйки. Любит тишину и подоконник с видом на улицу.',
    traits: ['привита', 'стерилизована', 'спокойная'],
  },
];

async function seed() {
  try {
    await connectDB(process.env.MONGODB_URI);
    await Pet.deleteMany({});
    const pets = await Pet.insertMany(PETS);
    console.log(`Добавлено питомцев: ${pets.length}`);
  } catch (error) {
    console.error('Ошибка заполнения базы:', error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seed();
