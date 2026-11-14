import Head from 'next/head';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PageHeader from '@/components/PageHeader/PageHeader';

// Страница без функций получения данных: Next.js сам делает её статической
export default function AiPage() {
  return (
    <>
      <Head>
        <title>ИИ-подбор питомца — Лапки</title>
      </Head>

      <PageHeader title="ИИ" />

      <Card>
        <CardContent>
          <Typography variant="h2" component="h2" gutterBottom>
            Подбор питомца с ИИ
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Раздел в разработке. Здесь ИИ-помощник подберёт питомца по вашему образу жизни: размеру квартиры,
            графику работы и опыту с животными.
          </Typography>
          <Button component={Link} href="/pets" variant="contained" color="secondary">
            Пока посмотреть всех питомцев
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
