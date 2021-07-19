const mongoose = require('mongoose')
const app = require('./api/srv')

mongoose.connect('mongodb+srv://fabezio:C0denCQRT@cluster0.0r1tc.mongodb.net/timemap?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => console.log('DB ready'))

app.listen(3000, () => { console.log('it works!') })
