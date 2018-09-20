const { Schema, model } = require('mongoose');

const commentSchema = Schema({
  objectId: Schema.Types.ObjectId,
  author: { type: String, required: true },
  text: { type: String, required: true },
  rate: { type: Number, required: true },
  createdAt: Date,
  updatedAt: Date,
  replies: Array
});

module.exports = model('Comment', commentSchema);
