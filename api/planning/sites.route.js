const {Router} = require("express")
const { Site } = require('./models')
const { getAll, postThis, getId, removeId } = require('../mdw')

const router = Router()

router.get('/', (req, res) => getAll(req, res, Site, "Pas d'employé pour le moment"))
router.get('/:id', (req, res) => getId(req, res, Site, 'employé non trouvé'))
router.delete('/:id', (req, res) => removeId(req, res, Site, 'employé non effacé'))
router.post('/add', (req, res) => postThis(req, res, Site, "Erreur d'enregistrement de l'employé"))

module.exports=router
// router.get('/', (req, res) => res.send("sites here"))

