import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import PetCard from './components/PetCard/PetCard.jsx';
import BottomNav from './components/BottomNav/BottomNav.jsx';
import NavTabs from './components/NavTabs/NavTabs.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import FavoritesBadge from './components/FavoritesBadge/FavoritesBadge.jsx';
import HelpCard from './components/HelpCard/HelpCard.jsx';
import { PETS } from './data/pets.js';
import logo from './assets/icons/logo.svg';

const NAV_ITEMS = [
  { id: 'home', label: 'Главная', icon: <HomeOutlinedIcon /> },
  { id: 'ai', label: 'ИИ', icon: <AutoAwesomeOutlinedIcon />, accent: 'ai' },
  { id: 'donate', label: 'Донаты', icon: <MonetizationOnOutlinedIcon /> },
  { id: 'pets', label: 'Питомцы', icon: <PetsOutlinedIcon /> },
];

function App() {
  const [counter, setCounter] = useState(0);
  const [tab, setTab] = useState('home');
  const [lastOpened, setLastOpened] = useState('—');
  const current = NAV_ITEMS.find((item) => item.id === tab);

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{ bgcolor: 'background.default', borderBottom: 1, borderColor: 'divider' }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ gap: 2 }}>
            <Box component="img" src={logo} alt="Лапки" sx={{ height: 40 }} />
            <Typography variant="h6" component="span" sx={{ fontWeight: 700, display: { xs: 'none', sm: 'block' } }}>
              ЛР6 Кудрявская
            </Typography>
            <NavTabs items={NAV_ITEMS} value={tab} onChange={setTab} />
            <Box sx={{ flexGrow: 1 }} />
            <FavoritesBadge />
          </Toolbar>
        </Container>
      </AppBar>

      <Container component="main" maxWidth="lg" sx={{ pt: { xs: 3, md: 5 }, pb: { xs: 12, md: 6 } }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'baseline' }}
          spacing={1}
          sx={{ mb: 3 }}
        >
          <Typography variant="h1">{current.label}</Typography>
          <Typography variant="caption" color="text.secondary">
            Открыта анкета: {lastOpened}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {PETS.map((pet) => (
            <Grid item key={pet.id} xs={12} sm={6} md={4}>
              <PetCard {...pet} onOpen={setLastOpened} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Favorites pets={PETS} />
            </Grid>
            <Grid item xs={12} md={6}>
              <HelpCard count={counter} onHelp={() => setCounter(counter + 1)} />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <BottomNav items={NAV_ITEMS} value={tab} onChange={setTab} />
    </>
  );
}

export default App;
