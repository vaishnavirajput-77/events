import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package' },
  eventType: { type: String },
  date: { type: Date },
  venue: { type: String },
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, default: 'pending', enum: ['pending', 'paid', 'refunded'] },
  status: { type: String, default: 'pending', enum: ['pending', 'confirmed', 'in-progress', 'completed', 'cancelled'] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Order', orderSchema);
