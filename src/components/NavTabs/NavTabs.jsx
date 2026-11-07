import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

function NavTabs({ items, value, onChange }) {
  return (
    <Tabs
      value={value}
      onChange={(event, id) => onChange(id)}
      textColor="inherit"
      indicatorColor="primary"
      sx={{ display: { xs: 'none', md: 'flex' }, ml: 4 }}
    >
      {items.map((item) => (
        <Tab key={item.id} value={item.id} label={item.label} icon={item.icon} iconPosition="start" sx={{ minHeight: 64 }} />
      ))}
    </Tabs>
  );
}

NavTabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    }),
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NavTabs;
