const { Router } = require('express')
const { Ville } = require('./models')
const { getAll, postThis, getId, removeId } = require('../mdw')

const router = Router()

router.get('/', (req, res) => getAll(req, res, Ville, 'Pas de ville pour le moment'))
router.get('/:id', (req, res) => getId(req, res, Ville, 'ville non trouvée'))
router.delete('/:id', (req, res) => removeId(req, res, Ville, 'ville non effacée'))
router.post('/add', (req, res) => postThis(req, res, Ville, "Erreur d'enregistrement de la ville"))

router.get('')

module.exports = router
