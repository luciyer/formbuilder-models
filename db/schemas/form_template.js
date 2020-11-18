const Schema = require("mongoose").Schema

const formTemplateSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  questions: [
    Schema.Types.Mixed
  ]
})

module.exports = formTemplateSchema
