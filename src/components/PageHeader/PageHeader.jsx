import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const MODE_COLOR = { SSR: 'secondary', SSG: 'primary' };

function PageHeader({ title, mode, note }) {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="space-between"
      alignItems={{ xs: 'flex-start', sm: 'center' }}
      spacing={1}
      sx={{ mb: 3 }}
    >
      <Typography variant="h1">{title}</Typography>
      {mode && (
        <Stack direction="row" spacing={1} alignItems="center">
          <Chip label={mode} size="small" color={MODE_COLOR[mode]} />
          <Typography variant="caption" color="text.secondary" data-testid="render-note">
            {note}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['SSR', 'SSG']),
  note: PropTypes.string,
};

export default PageHeader;
