import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { clearFavorites, removeFavorite, selectFavoriteIds } from '../../store/favoritesSlice.js';

function Favorites({ pets }) {
  const ids = useSelector(selectFavoriteIds);
  const dispatch = useDispatch();
  const favoritePets = pets.filter((pet) => ids.includes(pet.id));

  return (
    <Card component="section" sx={{ height: '100%' }}>
      <CardHeader
        title="Избранное"
        titleTypographyProps={{ variant: 'h2', component: 'h2' }}
        action={<Chip label={favoritePets.length} color="primary" />}
      />

      <CardContent sx={{ pt: 0 }}>
        {favoritePets.length === 0 ? (
          <Typography color="text.secondary">
            Нажмите на сердечко в карточке питомца, чтобы добавить его сюда.
          </Typography>
        ) : (
          <List disablePadding>
            {favoritePets.map((pet) => (
              <ListItem
                key={pet.id}
                divider
                disableGutters
                secondaryAction={
                  <Button size="small" color="error" onClick={() => dispatch(removeFavorite(pet.id))}>
                    Убрать
                  </Button>
                }
              >
                <ListItemText primary={pet.name} />
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          variant="outlined"
          color="inherit"
          size="small"
          disabled={favoritePets.length === 0}
          onClick={() => dispatch(clearFavorites())}
        >
          Очистить избранное
        </Button>
      </CardActions>
    </Card>
  );
}

Favorites.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Favorites;
