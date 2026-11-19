import { expect, test } from '@playwright/test';

const NEW_PET = {
  name: 'Пушок',
  species: 'cat',
  age: 1,
  description: 'Котёнок, 1 год. Игривый, приучен к лотку.',
};

test('пользователь добавляет анкету нового питомца', async ({ page }) => {
  const sentPets = [];

  await page.route('**/api/pets', async (route) => {
    const pet = route.request().postDataJSON();
    sentPets.push(pet);

    await route.fulfill({
      status: 201,
      json: { _id: '6750a1b2c3d4e5f6a7b8c9d0', ...pet, story: '', traits: [], photo: null, urgent: false },
    });
  });

  await test.step('открыть список питомцев и перейти к форме', async () => {
    await page.goto('/pets');
    await page.getByRole('link', { name: 'Добавить питомца' }).click();

    await expect(page).toHaveURL(/\/pets\/new$/);
    await expect(page.getByRole('heading', { name: 'Новый питомец' })).toBeVisible();
  });

  await test.step('заполнить анкету', async () => {
    await page.getByLabel('Кличка').fill(NEW_PET.name);
    await page.getByLabel('Вид').selectOption(NEW_PET.species);
    await page.getByLabel('Возраст').fill(String(NEW_PET.age));
    await page.getByLabel('Описание').fill(NEW_PET.description);
  });

  await test.step('сохранить анкету и проверить результат', async () => {
    await page.getByRole('button', { name: 'Сохранить анкету' }).click();

    await expect(page.getByText('Анкета питомца «Пушок» добавлена')).toBeVisible();
    await expect(page.getByLabel('Кличка')).toHaveValue('');
    expect(sentPets).toEqual([NEW_PET]);
  });
});
