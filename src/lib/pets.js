import { PETS } from '@/data/pets';

export async function getPets() {
  return PETS;
}

export async function getPetById(id) {
  return PETS.find((pet) => String(pet.id) === String(id)) ?? null;
}
