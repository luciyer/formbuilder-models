# formbuilder-models

This is a POC/starting point for a web app which will, in part, allow for forms to be generated dynamically, ie. config -> web forms.

This problem has been solved before, and in a much more robust way, but I needed my own starting point.

In essence, the models are as follows (see `db/schemas`)..

* Form
* FormTemplate

Which each hold a list of questions of mixed types, those mixed types being represented by:

* FormItem

and its discriminator (ie. `extends FormItem`)

* FormItemText
* FormItemNumber
* FormItemBoolean
* FormItemDate
* FormItemSelect
* FormItemMulti

There is one "helper" schema for select and multiselect types:

* SelectOption

---

`server.js` shows a basic example exposing a few endpoints to allow creation of a template and a form from that template. 
