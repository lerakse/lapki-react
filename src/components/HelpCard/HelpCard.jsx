import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InputField from '../InputField/InputField.jsx';

function HelpCard({ count, onHelp }) {
  return (
    <Card component="section" sx={{ height: '100%' }}>
      <CardHeader title="Хочу помочь" titleTypographyProps={{ variant: 'h2', component: 'h2' }} />
      <CardContent sx={{ pt: 0 }}>
        <Stack spacing={1}>
          <InputField label="Имя" placeholder="Как вас зовут" required />
          <InputField label="Email" type="email" placeholder="name@mail.com" required />
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 1 }}>
          <Button variant="contained" onClick={onHelp}>
            Помочь
          </Button>
          <Button variant="outlined" color="inherit" endIcon={<ArrowForwardIcon />}>
            Подробнее
          </Button>
          <Button variant="contained" disabled>
            Недоступна
          </Button>
        </Stack>

        <Typography variant="caption" color="text.secondary" component="p" sx={{ mt: 2 }}>
          Нажатий на «Помочь»: {count}
        </Typography>
      </CardContent>
    </Card>
  );
}

HelpCard.propTypes = {
  count: PropTypes.number.isRequired,
  onHelp: PropTypes.func.isRequired,
};

export default HelpCard;
