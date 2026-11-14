import Head from 'next/head';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PageHeader from '@/components/PageHeader/PageHeader';

// Страница без функций получения данных: Next.js сам делает её статической
export default function DonatePage() {
  return (
    <>
      <Head>
        <title>Помочь приюту — Лапки</title>
      </Head>

      <PageHeader title="Донаты" />

      <Card>
        <CardContent>
          <Typography variant="h2" component="h2" gutterBottom>
            Поддержать приют
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Раздел в разработке. Пожертвования пойдут на корм, лечение и стерилизацию питомцев приюта.
          </Typography>
          <Button component={Link} href="/" variant="contained">
            Вернуться на главную
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
