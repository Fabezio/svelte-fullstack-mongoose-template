const mongoose = require('mongoose')
const app = require('./api/srv')

mongoose.connect('mongodb://localhost/workplaces', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => console.log('DB ready'))

app.listen(3000, () => { console.log('it works!') })
