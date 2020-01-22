import { Schema, model } from 'mongoose';

const budgetSchema = new Schema({
  product: String,
  price: Number,
  status: String,
});

export default model('budget', budgetSchema);
