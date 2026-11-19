import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import FavoriteButton from '@/components/FavoriteButton/FavoriteButton';
import { makeStore } from '@/store';

function renderWithStore(ui) {
  const store = makeStore();
  render(<Provider store={store}>{ui}</Provider>);
  return store;
}

describe('FavoriteButton', () => {
  it('добавляет питомца в избранное по клику', async () => {
    const user = userEvent.setup();
    const store = renderWithStore(<FavoriteButton petId={3} />);

    const button = screen.getByRole('button', { name: 'Добавить в избранное' });
    expect(button).toHaveAttribute('aria-pressed', 'false');

    await user.click(button);

    expect(screen.getByRole('button', { name: 'Убрать из избранного' })).toHaveAttribute('aria-pressed', 'true');
    expect(store.getState().favorites.ids).toContain(3);
  });

  it('убирает питомца из избранного повторным кликом', async () => {
    const user = userEvent.setup();
    const store = renderWithStore(<FavoriteButton petId={1} />);

    await user.click(screen.getByRole('button', { name: 'Убрать из избранного' }));

    expect(screen.getByRole('button', { name: 'Добавить в избранное' })).toBeInTheDocument();
    expect(store.getState().favorites.ids).not.toContain(1);
  });
});
