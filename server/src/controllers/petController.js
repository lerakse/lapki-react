const mongoose = require('mongoose');
const Pet = require('../models/Pet');

// Общая обработка ошибок: ошибки валидации и некорректный id — 400, остальное — 500
function handleError(res, error) {
  if (error instanceof mongoose.Error.ValidationError) {
    const errors = Object.fromEntries(
      Object.entries(error.errors).map(([field, err]) => [field, err.message]),
    );
    return res.status(400).json({ message: 'Ошибка валидации', errors });
  }

  if (error instanceof mongoose.Error.CastError) {
    return res.status(400).json({ message: `Некорректное значение поля ${error.path}` });
  }

  console.error(error);
  return res.status(500).json({ message: 'Ошибка сервера' });
}

function isValidId(id) {
  return mongoose.isValidObjectId(id);
}

// GET /api/pets — список всех питомцев
async function getPets(req, res) {
  try {
    const pets = await Pet.find().sort({ createdAt: 1 });
    return res.status(200).json(pets);
  } catch (error) {
    return handleError(res, error);
  }
}

// GET /api/pets/:id — один питомец по id
async function getPetById(req, res) {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ message: 'Некорректный id питомца' });
    }

    const pet = await Pet.findById(id);
    if (!pet) {
      return res.status(404).json({ message: 'Питомец не найден' });
    }

    return res.status(200).json(pet);
  } catch (error) {
    return handleError(res, error);
  }
}

// POST /api/pets — создание питомца
async function createPet(req, res) {
  try {
    const pet = await Pet.create(req.body);
    return res.status(201).json(pet);
  } catch (error) {
    return handleError(res, error);
  }
}

// PUT /api/pets/:id — обновление питомца
async function updatePet(req, res) {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ message: 'Некорректный id питомца' });
    }

    const pet = await Pet.findByIdAndUpdate(id, req.body, {
      returnDocument: 'after', // вернуть уже обновлённый документ
      runValidators: true, // проверять данные по схеме и при обновлении
    });
    if (!pet) {
      return res.status(404).json({ message: 'Питомец не найден' });
    }

    return res.status(200).json(pet);
  } catch (error) {
    return handleError(res, error);
  }
}

// DELETE /api/pets/:id — удаление питомца
async function deletePet(req, res) {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ message: 'Некорректный id питомца' });
    }

    const pet = await Pet.findByIdAndDelete(id);
    if (!pet) {
      return res.status(404).json({ message: 'Питомец не найден' });
    }

    return res.status(200).json({ message: 'Питомец удалён', pet });
  } catch (error) {
    return handleError(res, error);
  }
}

module.exports = { getPets, getPetById, createPet, updatePet, deletePet };
