const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient
app.use(express.urlencoded({ extended: true }));  // x-www-form-urlencoded post body 처리 미들웨어

let db;
MongoClient.connect("mongodb+srv://vl0011:shin0114@cluster0.hdy4v5g.mongodb.net/?retryWrites=true&w=majority", function(err, client){
  if (err) return console.log(err)
  db = client.db('nodejs');
  app.listen(8080, function() {
    console.log('listening on 8080')
  })
})


app.get('/', function(req, res) { 
  res.sendFile(__dirname +'/index.html')
  })

app.get('/write', function(req, res) { 
    res.sendFile(__dirname +'/write.html')
  })

app.post('/add', function(req, res){
    console.log(req.body);
    db.collection('login').insertOne({
        email: req.body.email,
        password: req.body.password,
        is_checked: (req.body.check) === "on"
    })
    res.send('complete....')
  });
  
