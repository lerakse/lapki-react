import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import FavoriteButton from '../FavoriteButton/FavoriteButton.jsx';
import PetPhoto from '../PetPhoto/PetPhoto.jsx';

function PetCard({ id, name, description, photo, urgent = false }) {
  return (
    <Card component="article" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ position: 'relative' }}>
        <PetPhoto
          photo={photo}
          name={name}
          height={200}
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 400px"
        />

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
        <Button component={Link} href={`/pets/${id}`} variant="outlined" color="inherit" fullWidth>
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
};

export default PetCard;
