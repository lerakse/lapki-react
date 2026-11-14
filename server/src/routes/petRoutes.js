const express = require('express');
const { getPets, getPetById, createPet, updatePet, deletePet } = require('../controllers/petController');

const router = express.Router();

router.get('/', getPets);
router.get('/:id', getPetById);
router.post('/', createPet);
router.put('/:id', updatePet);
router.delete('/:id', deletePet);

module.exports = router;
