const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vegetableBehaviorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  behavior: [
    {
      _id: false,
      name: String,
      amount_date: Number,
      status_loop: Boolean
    }
  ],
  user_id: {
    type: Schema.Types.ObjectId
  }
}, {
  timestamps: { createdAt: 'timestamp.created_at', updatedAt: 'timestamp.updated_at' }
})

module.exports = mongoose.model('vegetable_behavior', vegetableBehaviorSchema)