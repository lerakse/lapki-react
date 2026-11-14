import PropTypes from 'prop-types';
import Link from 'next/link';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

function NavTabs({ items, value }) {
  return (
    <Tabs
      value={value}
      textColor="inherit"
      indicatorColor="primary"
      sx={{ display: { xs: 'none', md: 'flex' }, ml: 4 }}
    >
      {items.map((item) => (
        <Tab
          key={item.id}
          value={item.id}
          label={item.label}
          icon={item.icon}
          iconPosition="start"
          component={Link}
          href={item.href}
          sx={{ minHeight: 64 }}
        />
      ))}
    </Tabs>
  );
}

NavTabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    }),
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([false])]).isRequired,
};

export default NavTabs;
