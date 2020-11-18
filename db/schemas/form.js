const Schema = require("mongoose").Schema

const formSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  template: {
    type: Schema.Types.ObjectId,
    required: true
  },
  questions: [
    Schema.Types.Mixed
  ]
})

module.exports = formSchema
