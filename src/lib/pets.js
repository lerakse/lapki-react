import { PETS } from '@/data/pets';

// Имитация запросов к API приюта. В реальном проекте здесь был бы fetch,
// а функции вызываются только на сервере: в getServerSideProps и getStaticProps
export async function getPets() {
  return PETS;
}

export async function getPetById(id) {
  return PETS.find((pet) => String(pet.id) === String(id)) ?? null;
}
