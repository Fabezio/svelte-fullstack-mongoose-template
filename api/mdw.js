function handleData(resp, data, thisErrMsg) {
    if (!data) { throw new Error(thisErrMsg) }
    resp.status(200).json(data)
}
function displayError(resp, code) {
    resp.status(code).json({ message: error.message })
}

async function getAll(request, response, ThisColl, errMsg) {
  try {
      const coll = await ThisColl.find({})
      handleData(response, coll, errMsg)
    // if (!coll) { throw new Error(errMsg) }
    // response.status(200).json(coll)
  } catch (error) {
      displayError(response, 400)
    // response.status(400).json({ message: error.message })
  }
}

async function getId (request, response, ThisColl, errMsg) {
  const { id } = request.params
  try {
      const obj = await ThisColl.findById(id)
      handleData(response, obj, errMsg)
  } catch (error) {
      displayError(response, 404)
  }
}
async function removeId (request, response, ThisColl, errMsg, remErrMsg) {
  const { id } = request.params
  try {
    const obj = ThisColl.findById(id)
    if (!obj) { throw new Error(errMsg) }
    const removed = await obj.remove()
    if (!removed) { throw new Error(remErrMsg) }
      response.status(200).json({ id })
    //    handleData(obj, errMsg)
    //    handleData(removed, remErrMsg)
  } catch (error) {
      displayError(response, 404)
  }
//   } catch (error) {
//     response.status(404).json({ message: error })
//   }
}

async function postThis (request, response, ThisColl, errMsg) {
  // const obj = request.params
  // data = request.body
  const newObj = new ThisColl(request.body)
  try {
      const obj = await newObj.save()
       handleData(response, obj, errMsg)
  } catch (error) {
      displayError(response, 500)
  }
//     if (!obj) { throw new Error(errMsg) }
//     response.status(200).json(obj)
//   } catch (error) {
//     response.status(500).json({ message: error.message })
//   }
}

module.exports = { getAll, getId, postThis, removeId }
