import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { selectFavoritesCount } from '../../store/favoritesSlice.js';

function FavoritesBadge() {
  const count = useSelector(selectFavoritesCount);

  return (
    <Badge badgeContent={count} color="primary" showZero aria-label={`В избранном: ${count}`}>
      <FavoriteIcon color="error" />
    </Badge>
  );
}

export default FavoritesBadge;
