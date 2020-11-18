const path = require("path"),
      express = require("express"),
      mongoose = require("mongoose");

const db = require("./db")

const app = express()

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .listen(process.env.PORT || 8080, db.connect())


app.get("/formtemplate", async (req, res) => {

  const { FormTemplate, FormItemText, FormItemNumber } = db

  try {

    const template = await FormTemplate.create({
      name: "Person Form Template",
      description: "Name, Gender, Age."
    })

    const personName = await FormItemText.create({
      label: "Full Name",
      shortName: "fullName",
      placeholder: "Enter your full name...",
      minLength: 3,
      maxLength: 255
    })

    const personAge = await FormItemNumber.create({
      label: "Age",
      shortName: "age",
      minValue: 0,
      maxValue: 99
    })

    const formUpdate = await FormTemplate.findByIdAndUpdate(
      template._id, {
      questions: [
        personName,
        personAge
      ]
    }, { new: true })

    return res.status(200).json(formUpdate)

  } catch (error) {
    return res.status(500).json(error.message)
  }

})

app.get("/viewformtemplates", async (req, res) => {
  const { FormTemplate } = db
  const templates = await FormTemplate.find()
  return res.status(200).json(templates)
})

app.get("/viewforms", async (req, res) => {
  const { Form } = db
  const forms = await Form.find()
  return res.status(200).json(forms)
})


app.post("/templateform/:template_id", async (req, res) => {

  const { FormTemplate, Form } = db

  try {

    const template = await FormTemplate.findById(req.params.template_id)

    if (!template)
      return res.status(500).json("template not found")

    const form = await Form.create({
      name: req.body.name,
      description: req.body.description,
      template: req.params.template_id,
      questions: template.questions
    })

    return res.status(200).json(form)
  } catch (error) {
    return res.status(500).json(error.message)
  }

})
