import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteButton from '@/components/FavoriteButton/FavoriteButton';
import PageHeader from '@/components/PageHeader/PageHeader';
import PetPhoto from '@/components/PetPhoto/PetPhoto';
import { getPetById, getPets } from '@/lib/pets';
import { formatDateTime } from '@/lib/formatDateTime';

export default function PetPage({ pet, builtAt }) {
  return (
    <>
      <Head>
        <title>{`${pet.name} — анкета питомца | Лапки`}</title>
        <meta name="description" content={pet.description} />
      </Head>

      <PageHeader title={`Анкета: ${pet.name}`} mode="SSG" note={`собрано при сборке: ${builtAt}`} />

      <Card>
        <Grid container>
          <Grid item xs={12} md={5}>
            <PetPhoto
              photo={pet.photo}
              name={pet.name}
              height={{ xs: 260, md: '100%' }}
              sizes="(max-width: 900px) 100vw, 480px"
              priority
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <CardContent sx={{ p: { xs: 2, md: 4 } }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                <Typography variant="h2" component="h2">
                  {pet.name}
                </Typography>
                <FavoriteButton petId={pet.id} />
              </Stack>

              <Typography color="text.secondary" sx={{ mb: 2 }}>
                {pet.description}
              </Typography>

              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
                {pet.urgent && <Chip label="срочно" color="warning" size="small" />}
                {pet.traits.map((trait) => (
                  <Chip key={trait} label={trait} variant="outlined" size="small" />
                ))}
              </Stack>

              <Typography variant="h3" component="h3" gutterBottom>
                История
              </Typography>
              <Typography sx={{ mb: 3 }}>{pet.story}</Typography>

              <Button component={Link} href="/pets" variant="outlined" color="inherit" startIcon={<ArrowBackIcon />}>
                Ко всем питомцам
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

// getStaticPaths сообщает Next.js, какие анкеты (/pets/1 … /pets/6)
// нужно сгенерировать во время сборки. fallback: false — для других id будет 404
export async function getStaticPaths() {
  const pets = await getPets();

  return {
    paths: pets.map((pet) => ({ params: { id: String(pet.id) } })),
    fallback: false,
  };
}

// SSG: данные конкретного питомца получаются один раз при сборке
export async function getStaticProps({ params }) {
  const pet = await getPetById(params.id);

  if (!pet) {
    return { notFound: true };
  }

  return {
    props: {
      pet,
      builtAt: formatDateTime(new Date()),
    },
  };
}

PetPage.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    story: PropTypes.string.isRequired,
    traits: PropTypes.arrayOf(PropTypes.string).isRequired,
    photo: PropTypes.string,
    urgent: PropTypes.bool,
  }).isRequired,
  builtAt: PropTypes.string.isRequired,
};
