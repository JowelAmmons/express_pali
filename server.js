const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.listen(2121)   
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
  }
)



