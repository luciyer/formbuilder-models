const mongoose = require("mongoose")

const connect = require("./connect"),
      schemas = require("./schemas");

const {
  baseItem,
  textItem,
  numItem,
  boolItem,
  dateItem,
  selectItem,
  multiSelectItem,
  selectItemOption
} = schemas.formItem;

const Form = mongoose.model("Form", schemas.form),
      FormTemplate = mongoose.model("FormTemplate", schemas.formTemplate);

const FormItem = mongoose.model("FormItem", baseItem),
      FormItemText = FormItem.discriminator("FormItemText", textItem),
      FormItemNumber = FormItem.discriminator("FormItemNumber", numItem),
      FormItemBoolean = FormItem.discriminator("FormItemBoolean", boolItem),
      FormItemDate = FormItem.discriminator("FormItemDate", dateItem),
      FormItemSelect = FormItem.discriminator("FormItemSelect", selectItem),
      FormItemMulti = FormItem.discriminator("FormItemMulti", multiSelectItem);

const SelectOption = mongoose.model("SelectOption", selectItemOption)

module.exports = {
  connect,
  Form,
  FormTemplate,
  FormItemText,
  FormItemNumber,
  FormItemBoolean,
  FormItemDate,
  FormItemSelect,
  FormItemMulti,
  SelectOption
}
