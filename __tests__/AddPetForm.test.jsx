import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddPetForm from '@/components/AddPetForm/AddPetForm';
import { createPet } from '@/lib/api';

jest.mock('@/lib/api', () => ({
  createPet: jest.fn(),
}));

async function fillForm(user) {
  await user.type(screen.getByLabelText('Кличка'), 'Пушок');
  await user.selectOptions(screen.getByLabelText('Вид'), 'dog');
  await user.type(screen.getByLabelText('Возраст'), '2');
  await user.type(screen.getByLabelText('Описание'), 'Щенок, 2 года. Весёлый и добрый.');
}

describe('AddPetForm', () => {
  beforeEach(() => {
    createPet.mockReset();
  });

  it('отправляет данные формы и показывает сообщение об успехе', async () => {
    const user = userEvent.setup();
    createPet.mockResolvedValue({ _id: 'abc123', name: 'Пушок' });
    render(<AddPetForm />);

    await fillForm(user);
    await user.click(screen.getByRole('button', { name: 'Сохранить анкету' }));

    expect(createPet).toHaveBeenCalledWith({
      name: 'Пушок',
      species: 'dog',
      age: 2,
      description: 'Щенок, 2 года. Весёлый и добрый.',
    });
    expect(await screen.findByRole('alert')).toHaveTextContent('Анкета питомца «Пушок» добавлена');
    expect(screen.getByLabelText('Кличка')).toHaveValue('');
  });

  it('показывает ошибку, которую вернул сервер', async () => {
    const user = userEvent.setup();
    createPet.mockRejectedValue(new Error('Укажите кличку питомца'));
    render(<AddPetForm />);

    await user.click(screen.getByRole('button', { name: 'Сохранить анкету' }));

    expect(await screen.findByRole('alert')).toHaveTextContent('Укажите кличку питомца');
  });
});
