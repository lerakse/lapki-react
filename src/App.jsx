import { useState } from 'react';
import Button from './components/Button/Button.jsx';
import InputField from './components/InputField/InputField.jsx';
import PetCard from './components/PetCard/PetCard.jsx';
import BottomNav from './components/BottomNav/BottomNav.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import FavoritesBadge from './components/FavoritesBadge/FavoritesBadge.jsx';
import { PETS } from './data/pets.js';
import logo from './assets/icons/logo.svg';
import styles from './App.module.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Главная', icon: 'home' },
  { id: 'ai', label: 'ИИ', icon: 'ai', accent: 'ai' },
  { id: 'donate', label: 'Донаты', icon: 'donate' },
  { id: 'pets', label: 'Питомцы', icon: 'paw' },
];

function App() {
  const [counter, setCounter] = useState(0);
  const [tab, setTab] = useState('home');
  const [lastOpened, setLastOpened] = useState('—');

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <img src={logo} alt="Лапки" height="40" />
        <h1 className={styles.title}>ЛР5 Кудрявская</h1>
      </header>

      <div className={styles.layout}>
        <section className={styles.panel}>
          <Favorites pets={PETS} />

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
        </section>

        <section className={styles.phoneWrap}>
          <div className={styles.phone}>
            <div className={styles.screen}>
              <div className={styles.screenHead}>
                <p className={styles.screenTitle}>{NAV_ITEMS.find((i) => i.id === tab).label}</p>
                <FavoritesBadge />
              </div>
              {PETS.map((pet) => (
                <PetCard key={pet.id} {...pet} onOpen={(name) => setLastOpened(name)} />
              ))}
            </div>
            <BottomNav items={NAV_ITEMS} initialActive="home" onChange={setTab} />
          </div>
          <p className={styles.note}>Открыта анкета: {lastOpened}</p>
        </section>
      </div>
    </main>
  );
}

export default App;
