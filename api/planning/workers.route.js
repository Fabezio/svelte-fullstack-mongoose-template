const { Router } = require('express')
const { Worker } = require('./models')
const { getAll, postThis, getId, removeId } = require('../mdw')

const router = Router()

router.get('/', (req, res) => getAll(req, res, Worker, "Pas d'employé pour le moment"))
router.get('/:id', (req, res) => getId(req, res, Worker, 'employé non trouvé'))
router.delete('/:id', (req, res) => removeId(req, res, Worker, 'employé non effacé'))
router.post('/add', (req, res) => postThis(req, res, Worker, "Erreur d'enregistrement de l'employé"))

module.exports = router
