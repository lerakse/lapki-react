import PropTypes from 'prop-types';
import Image from 'next/image';
import Box from '@mui/material/Box';
import PetsIcon from '@mui/icons-material/Pets';

// next/image сам уменьшает фото под размер экрана и отдаёт его в WebP
function PetPhoto({ photo, name, height, sizes, priority = false }) {
  return (
    <Box sx={{ position: 'relative', height, bgcolor: 'divider' }}>
      {photo ? (
        <Image src={photo} alt={name} fill sizes={sizes} priority={priority} style={{ objectFit: 'cover' }} />
      ) : (
        <Box
          role="img"
          aria-label="Фото питомца скоро появится"
          sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <PetsIcon sx={{ fontSize: 64, color: 'text.secondary' }} />
        </Box>
      )}
    </Box>
  );
}

PetPhoto.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
  sizes: PropTypes.string.isRequired,
  priority: PropTypes.bool,
};

export default PetPhoto;
