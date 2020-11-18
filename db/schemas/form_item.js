const { nanoid } = require("nanoid")
const Schema = require("mongoose").Schema
const options = { discriminatorKey: "type" }

/* Base */

const baseItem = new Schema({
  publicId: {
    type: String,
    default: () => nanoid(10)
  },
  label: {
    type: String,
    required: true
  },
  shortName: {
    type: String,
    required: true
  },
  helpText: String,
  isDisplayed: {
    type: Boolean,
    required: true,
    default: true
  },
  isRequired: {
    type: Boolean,
    required: true,
    default: true
  },
  order: Number
}, options)


/* Variable */

const textItem = new Schema({
  default: String,
  placeholder: String,
  minLength: Number,
  maxLength: Number
}, options)

const numItem = new Schema({
  default: Number,
  minValue: Number,
  maxValue: Number
}, options)

const boolItem = new Schema({
  default: Boolean
}, options)

const dateItem = new Schema({
  default: Date,
  minDate: Date,
  maxDate: Date
}, options)

/* Fixed */

const selectItemOption = new Schema({
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
})

const selectItem = new Schema({
  default: selectItemOption,
  options: [ selectItemOption ]
}, options)

const multiSelectItem = new Schema({
  defaults: [ selectItemOption ],
  options: [ selectItemOption ]
}, options)


module.exports = {
  baseItem,
  textItem,
  numItem,
  boolItem,
  dateItem,
  selectItem,
  multiSelectItem,
  selectItemOption
}
