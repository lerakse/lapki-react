const mongoose = require('mongoose');

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Укажите кличку питомца'],
      trim: true,
      maxlength: [50, 'Кличка не длиннее 50 символов'],
    },
    species: {
      type: String,
      required: [true, 'Укажите вид питомца'],
      enum: { values: ['cat', 'dog'], message: 'Вид питомца: cat или dog' },
    },
    age: {
      type: Number,
      required: [true, 'Укажите возраст питомца'],
      min: [0, 'Возраст не может быть отрицательным'],
      max: [30, 'Возраст не больше 30 лет'],
    },
    description: {
      type: String,
      required: [true, 'Добавьте краткое описание'],
      trim: true,
      maxlength: [300, 'Описание не длиннее 300 символов'],
    },
    story: { type: String, trim: true, default: '' },
    traits: { type: [String], default: [] },
    photo: { type: String, default: null },
    urgent: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('Pet', petSchema);
