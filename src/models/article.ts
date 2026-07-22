/*
 * src/models/article.ts
 * --------------------
 * Importaciones
 * Definicion de esquema
 * Exportar modelo
 */
import {
  Schema,
  model,
  type InferSchemaType,
  type PaginateModel
} from "mongoose";

import mongoosePaginate from "mongoose-paginate-v2";

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

ArticleSchema.plugin(mongoosePaginate);

type Article = InferSchemaType<typeof ArticleSchema>;

export default model<Article, PaginateModel<Article>>(
    "Article",
    ArticleSchema,
    "articles"
);
