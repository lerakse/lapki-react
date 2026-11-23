import Head from 'next/head';
import Link from 'next/link';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddPetForm from '@/components/AddPetForm/AddPetForm';
import PageHeader from '@/components/PageHeader/PageHeader';

export default function NewPetPage() {
  return (
    <>
      <Head>
        <title>Новый питомец — Лапки</title>
      </Head>

      <PageHeader title="Новый питомец" />
      <AddPetForm />

      <Button component={Link} href="/pets" color="inherit" startIcon={<ArrowBackIcon />} sx={{ mt: 2 }}>
        Ко всем питомцам
      </Button>
    </>
  );
}
