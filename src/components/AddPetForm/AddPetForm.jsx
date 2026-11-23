import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { createPet } from '@/lib/api';

const EMPTY_FORM = { name: '', species: 'cat', age: '', description: '' };

function AddPetForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleChange = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const pet = await createPet({ ...form, age: Number(form.age) });
      setStatus('success');
      setMessage(`Анкета питомца «${pet.name}» добавлена`);
      setForm(EMPTY_FORM);
    } catch (error) {
      setStatus('error');
      setMessage(error.message);
    }
  };

  return (
    <Card component="form" onSubmit={handleSubmit} noValidate>
      <CardContent>
        <Stack spacing={2}>
          <TextField id="pet-name" label="Кличка" value={form.name} onChange={handleChange('name')} fullWidth />
          <TextField
            id="pet-species"
            label="Вид"
            select
            value={form.species}
            onChange={handleChange('species')}
            SelectProps={{ native: true }}
            fullWidth
          >
            <option value="cat">Кошка</option>
            <option value="dog">Собака</option>
          </TextField>
          <TextField
            id="pet-age"
            label="Возраст"
            type="number"
            value={form.age}
            onChange={handleChange('age')}
            inputProps={{ min: 0, max: 30 }}
            fullWidth
          />
          <TextField
            id="pet-description"
            label="Описание"
            value={form.description}
            onChange={handleChange('description')}
            multiline
            minRows={3}
            fullWidth
          />

          {status === 'success' && <Alert severity="success">{message}</Alert>}
          {status === 'error' && <Alert severity="error">{message}</Alert>}

          <Button type="submit" variant="contained" disabled={status === 'loading'} sx={{ alignSelf: 'flex-start' }}>
            Сохранить анкету
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default AddPetForm;
