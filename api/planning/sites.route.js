const {Router} = require("express")
const { Site } = require('./models')
const { getAll, postThis, getId, removeId } = require('../mdw')

const router = Router()

router.get('/', (req, res) => res.send("sites here"))

