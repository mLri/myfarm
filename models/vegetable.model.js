const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vegetableSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  detail: {
    type: String
  },
  vgbh_id: {
    type: Schema.Types.ObjectId
  }
}, {
  timestamps: { createdAt: 'timestamp.created_at', updatedAt: 'timestamp.updated_at' }
})

module.exports = mongoose.model('vegetable', vegetableSchema)