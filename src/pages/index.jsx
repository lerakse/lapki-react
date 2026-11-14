import { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PageHeader from '@/components/PageHeader/PageHeader';
import PetCard from '@/components/PetCard/PetCard';
import Favorites from '@/components/Favorites/Favorites';
import HelpCard from '@/components/HelpCard/HelpCard';
import { getPets } from '@/lib/pets';
import { formatDateTime } from '@/lib/formatDateTime';

export default function HomePage({ pets, renderedAt }) {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Head>
        <title>Лапки — питомцы ищут дом</title>
        <meta name="description" content="Каталог питомцев приюта «Лапки»: кошки и собаки, которые ищут семью." />
      </Head>

      <PageHeader title="Главная" mode="SSR" note={`сгенерировано на сервере: ${renderedAt}`} />

      <Grid container spacing={3}>
        {pets.map((pet) => (
          <Grid item key={pet.id} xs={12} sm={6} md={4}>
            <PetCard {...pet} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Favorites pets={pets} />
          </Grid>
          <Grid item xs={12} md={6}>
            <HelpCard count={counter} onHelp={() => setCounter(counter + 1)} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

// SSR: функция выполняется на сервере при каждом запросе к странице.
// Каталог приюта меняется часто, поэтому HTML каждый раз собирается заново
export async function getServerSideProps() {
  const pets = await getPets();

  return {
    props: {
      pets,
      renderedAt: formatDateTime(new Date()),
    },
  };
}

HomePage.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderedAt: PropTypes.string.isRequired,
};
