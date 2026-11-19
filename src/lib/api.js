export async function createPet(pet) {
  const response = await fetch('/api/pets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pet),
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const details = data.errors ? Object.values(data.errors).join('. ') : '';
    throw new Error(details || data.message || 'Не удалось сохранить анкету');
  }

  return data;
}
