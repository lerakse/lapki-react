import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PetsIcon from '@mui/icons-material/Pets';
import PageHeader from '@/components/PageHeader/PageHeader';
import { getPets } from '@/lib/pets';
import { formatDateTime } from '@/lib/formatDateTime';

export default function PetsPage({ pets, builtAt }) {
  return (
    <>
      <Head>
        <title>Все питомцы — Лапки</title>
        <meta name="description" content="Список всех кошек и собак приюта «Лапки» со ссылками на анкеты." />
      </Head>

      <PageHeader title="Питомцы" mode="SSG" note={`собрано при сборке: ${builtAt}`} />

      <Card>
        <List disablePadding>
          {pets.map((pet, index) => (
            <ListItemButton
              key={pet.id}
              component={Link}
              href={`/pets/${pet.id}`}
              divider={index < pets.length - 1}
              sx={{ py: 1.5 }}
            >
              <ListItemAvatar>
                <Avatar src={pet.photo} alt={pet.name} sx={{ bgcolor: 'divider', color: 'text.secondary' }}>
                  <PetsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={pet.name}
                secondary={pet.description}
                primaryTypographyProps={{ fontWeight: 600 }}
              />
              {pet.urgent && <Chip label="срочно" size="small" color="warning" sx={{ mx: 1 }} />}
              <ChevronRightIcon color="action" />
            </ListItemButton>
          ))}
        </List>
      </Card>

      <Button component={Link} href="/pets/new" variant="contained" startIcon={<AddIcon />} sx={{ mt: 3 }}>
        Добавить питомца
      </Button>
    </>
  );
}

export async function getStaticProps() {
  const pets = await getPets();

  return {
    props: {
      pets,
      builtAt: formatDateTime(new Date()),
    },
  };
}

PetsPage.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.object).isRequired,
  builtAt: PropTypes.string.isRequired,
};
