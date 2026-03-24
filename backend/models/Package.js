import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  eventType: { type: String, required: true },
  services: [{ type: mongoose.Schema.Types.Mixed }],
  addOns: [{ type: mongoose.Schema.Types.Mixed }],
  totalPrice: { type: Number, required: true },
  status: { type: String, default: 'draft', enum: ['draft', 'confirmed', 'completed'] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Package', packageSchema);
