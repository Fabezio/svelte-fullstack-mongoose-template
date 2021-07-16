const mongoose = require('mongoose')
const { model, Schema } = mongoose

// families
const workerSch = new Schema({
  nom: String,
  prenom: String,
  phone: String,
  email: String

})

const villeSch = new Schema({
  nom: String,
  codePostal: String
})

const siteSchema = new Schema({
  nom: String,
  adresse: String,
  telephone: String,
  email: String,
  ville: villeSch,
  effectif: [workerSch]
})

const Worker = model('Worker', workerSch)
const Ville = model('Ville', villeSch)
const Site = model('Site', siteSchema)

module.exports = { Worker, Site, Ville }
