import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { selectIsFavorite, toggleFavorite } from '../../store/favoritesSlice.js';

function FavoriteButton({ petId }) {
  const active = useSelector(selectIsFavorite(petId));
  const dispatch = useDispatch();
  const label = active ? 'Убрать из избранного' : 'Добавить в избранное';

  return (
    <Tooltip title={label}>
      <IconButton
        aria-label={label}
        aria-pressed={active}
        onClick={() => dispatch(toggleFavorite(petId))}
        sx={{ bgcolor: 'background.paper', '&:hover': { bgcolor: 'background.paper' } }}
      >
        {active ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
      </IconButton>
    </Tooltip>
  );
}

FavoriteButton.propTypes = {
  petId: PropTypes.number.isRequired,
};

export default FavoriteButton;
