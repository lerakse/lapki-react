import PropTypes from 'prop-types';
import Link from 'next/link';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

function BottomNav({ items, value }) {
  return (
    <Paper
      square
      elevation={0}
      sx={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        borderTop: 1,
        borderColor: 'divider',
        display: { xs: 'block', md: 'none' },
      }}
    >
      <BottomNavigation showLabels value={value}>
        {items.map((item) => (
          <BottomNavigationAction
            key={item.id}
            value={item.id}
            label={item.label}
            icon={item.icon}
            component={Link}
            href={item.href}
            sx={{ '&.Mui-selected': { color: item.accent === 'ai' ? 'secondary.main' : 'primary.dark' } }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}

BottomNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      accent: PropTypes.oneOf(['primary', 'ai']),
    }),
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([false])]).isRequired,
};

export default BottomNav;
