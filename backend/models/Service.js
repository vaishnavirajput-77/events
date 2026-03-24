import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  addOns: [{ name: String, price: Number }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Service', serviceSchema);
