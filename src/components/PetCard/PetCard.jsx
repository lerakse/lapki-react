import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';
import FavoriteButton from '../FavoriteButton/FavoriteButton.jsx';

function PetCard({ id, name, description, photo, urgent = false, onOpen }) {
  return (
    <Card component="article" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ position: 'relative' }}>
        {photo ? (
          <CardMedia component="img" height="200" image={photo} alt={name} sx={{ objectFit: 'cover' }} />
        ) : (
          <Box
            role="img"
            aria-label="Фото питомца скоро появится"
            sx={{ height: 200, bgcolor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <PetsIcon sx={{ fontSize: 64, color: 'text.secondary' }} />
          </Box>
        )}

        {urgent && (
          <Chip
            label="срочно"
            size="small"
            color="warning"
            sx={{ position: 'absolute', top: 12, left: 12 }}
          />
        )}

        <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
          <FavoriteButton petId={id} />
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h3" component="h3" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button variant="outlined" color="inherit" fullWidth onClick={() => onOpen && onOpen(name)}>
          Смотреть анкету
        </Button>
      </CardActions>
    </Card>
  );
}

PetCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string,
  urgent: PropTypes.bool,
  onOpen: PropTypes.func,
};

export default PetCard;
