const mongoose = require('mongoose')
const Schema = mongoose.Schema

const plotSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  wide: Number,
  long: Number,
  vgs: [
    {
      vg_id: Schema.Types.ObjectId,
      vg_process: [
        {
          name: String,
          status: Boolean
        }
      ]
    }
  ],
  status: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: { createdAt: 'timestamp.created_at', updatedAt: 'timestamp.updated_at' }
})

module.exports = mongoose.model('plot', plotSchema)