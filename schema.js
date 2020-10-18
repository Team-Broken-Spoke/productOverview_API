import mongoose from 'mongoose';
const { Schema } = mongoose;

const masterSchema = new Schema({
  product_id: Number,
  name:  String,
  slogan: String,
  description:   String,
  category: String,
  default_price: String,
  features: [{ feature: String, value: String }]
});