import joi from 'joi';
import mongoose from 'mongoose';
import { genreSchema } from './genre.js';

const Movie = mongoose.model(
  'Movies',
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 255,
    },
    genre: {
      type: genreSchema,
      required: true,
    },
    numberInStock: {
      type: Number,
      required: true,
      min: 0,
      max: 255,
    },
    dailyRentalRate: {
      type: Number,
      required: true,
      min: 0,
      max: 255,
    },
  })
);

function validateMovie(movie) {
  const schema = {
    title: joi.string().min(5).max(50).required(),
    genreId: joi.objectId().required(),
    numberInStock: joi.number().min(0).required(),
    dailyRentalRate: joi.number().min(0).required(),
  };

  return joi.validate(movie, schema);
}

export { Movie };
export { validateMovie as validate };
