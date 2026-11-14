import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import BottomNav from '../BottomNav/BottomNav.jsx';
import NavTabs from '../NavTabs/NavTabs.jsx';
import FavoritesBadge from '../FavoritesBadge/FavoritesBadge.jsx';

const NAV_ITEMS = [
  { id: 'home', href: '/', label: 'Главная', icon: <HomeOutlinedIcon /> },
  { id: 'ai', href: '/ai', label: 'ИИ', icon: <AutoAwesomeOutlinedIcon />, accent: 'ai' },
  { id: 'donate', href: '/donate', label: 'Донаты', icon: <MonetizationOnOutlinedIcon /> },
  { id: 'pets', href: '/pets', label: 'Питомцы', icon: <PetsOutlinedIcon /> },
];

// Активный раздел теперь определяется по адресу страницы, а не по useState
function getSection(pathname) {
  if (pathname === '/') return 'home';
  const item = NAV_ITEMS.find((nav) => nav.href !== '/' && pathname.startsWith(nav.href));
  return item ? item.id : false;
}

function Layout({ children }) {
  const { pathname } = useRouter();
  const section = getSection(pathname);

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
            <Box component={Link} href="/" sx={{ display: 'flex' }} aria-label="Лапки — на главную">
              <Box component="img" src="/logo.svg" alt="Лапки" sx={{ height: 40 }} />
            </Box>
            <Typography variant="h6" component="span" sx={{ fontWeight: 700, display: { xs: 'none', sm: 'block' } }}>
              ЛР7 Кудрявская
            </Typography>
            <NavTabs items={NAV_ITEMS} value={section} />
            <Box sx={{ flexGrow: 1 }} />
            <FavoritesBadge />
          </Toolbar>
        </Container>
      </AppBar>

      <Container component="main" maxWidth="lg" sx={{ pt: { xs: 3, md: 5 }, pb: { xs: 12, md: 6 } }}>
        {children}
      </Container>

      <BottomNav items={NAV_ITEMS} value={section} />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
