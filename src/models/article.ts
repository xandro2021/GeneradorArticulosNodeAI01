/*
 * src/models/article.ts
 * --------------------
 * Importaciones
 * Definicion de esquema
 * Exportar modelo
 */
import { Schema, model } from 'mongoose';

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  image: {
    type: String,
    default: 'default.png'
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
});

export default model('Article', ArticleSchema, 'articles');
