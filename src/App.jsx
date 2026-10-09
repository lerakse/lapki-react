import { useState } from 'react';
import Button from './components/Button/Button.jsx';
import InputField from './components/InputField/InputField.jsx';
import FavoriteButton from './components/FavoriteButton/FavoriteButton.jsx';
import PetCard from './components/PetCard/PetCard.jsx';
import BottomNav from './components/BottomNav/BottomNav.jsx';
import barsik from './assets/pets/barsik.png';
import logo from './assets/icons/logo.svg';
import styles from './App.module.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Главная', icon: 'home' },
  { id: 'ai', label: 'ИИ', icon: 'ai', accent: 'ai' },
  { id: 'donate', label: 'Донаты', icon: 'donate' },
  { id: 'pets', label: 'Питомцы', icon: 'paw' },
];

const PETS = [
  {
    name: 'Барсик',
    description: 'Кот, 3 года. На реабилитации, ищет заботливую семью.',
    photo: barsik,
    urgent: true,
  },
  {
    name: 'Ляля',
    description: 'Собака, 1 год. Активная и добрая, ищет семью с садом.',
    urgent: false,
  },
];

function App() {
  const [counter, setCounter] = useState(0);
  const [tab, setTab] = useState('home');
  const [lastFavorite, setLastFavorite] = useState('—');

  const handleFavorite = (name, value) => {
    setLastFavorite(`${name}: ${value ? 'добавлен' : 'удалён'}`);
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>ЛР2 Кудрявская</h1>
      </header>

      <div className={styles.layout}>
        <section className={styles.panel}>
          <img src={logo} alt="Лапки" height="40" />
          <h2 className={styles.h2}>Кнопки</h2>
          <div className={styles.row}>
            <Button onClick={() => setCounter(counter + 1)}>Помочь</Button>
            <Button variant="secondary" icon="arrow">Подробнее</Button>
            <Button disabled>Недоступна</Button>
          </div>
          <p className={styles.note}>Нажатий на «Помочь»: {counter}</p>

          <h2 className={styles.h2}>Поля ввода</h2>
          <div className={styles.column}>
            <InputField label="Имя" placeholder="Как вас зовут" required />
            <InputField label="Email" type="email" placeholder="name@mail.com" required />
          </div>

          <h2 className={styles.h2}>Сердечко</h2>
          <div className={styles.row}>
            <FavoriteButton />
            <FavoriteButton initialActive />
          </div>
        </section>

        <section className={styles.phoneWrap}>
          <div className={styles.phone}>
            <div className={styles.screen}>
              <p className={styles.screenTitle}>Экран: {NAV_ITEMS.find((i) => i.id === tab).label}</p>
              {PETS.map((pet) => (
                <PetCard
                  key={pet.name}
                  {...pet}
                  onFavoriteChange={handleFavorite}
                  onOpen={(name) => setLastFavorite(`открыта анкета: ${name}`)}
                />
              ))}
            </div>
            <BottomNav items={NAV_ITEMS} initialActive="home" onChange={setTab} />
          </div>
          <p className={styles.note}>Последнее действие: {lastFavorite}</p>
        </section>
      </div>
    </main>
  );
}

export default App;
