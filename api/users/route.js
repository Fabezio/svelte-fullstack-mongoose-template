const { Router } = require('express')
const Employee = require('./model')


const router = Router()

router.get('/', async (req, res) => {
  try {
    const coll = await Employee.find({})
    if (!coll) { throw new Error('could not find employees') }
    res.status(200).json(coll)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
