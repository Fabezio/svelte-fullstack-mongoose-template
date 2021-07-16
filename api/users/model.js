const mongoose = require('mongoose')
const { model, Schema } = mongoose
const Employee = model('Employee', new Schema({
  firstname: String,
  lastname: String,
  sex: String
}))

module.exports = Employee
