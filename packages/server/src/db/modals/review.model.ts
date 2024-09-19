
import mongoose, { Schema } from "mongoose";



const REVIEW_STATUS = {
  Rejected: 'Rejected',
  Approved: 'Approved',
  Waiting_Approval: 'Waiting Approval'
};

// Review Schema
const ReviewSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    default: null
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  title: {
    type: String,
    trim: true
  },
  rating: {
    type: Number,
    default: 0
  },
  review: {
    type: String,
    trim: true
  },
  isRecommended: {
    type: Boolean,
    default: true
  },
  status: {
    type: String,
    default: REVIEW_STATUS.Waiting_Approval,
    enum: [
      REVIEW_STATUS.Waiting_Approval,
      REVIEW_STATUS.Rejected,
      REVIEW_STATUS.Approved
    ]
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Review', ReviewSchema);
