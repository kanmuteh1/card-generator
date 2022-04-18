const express = require('express')

const generator = require('./function')

const app = express()

const fileUpload = require("express-fileupload");

let bodyParser = require("body-parser");

//not sure what "extended: false" is for
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const fs = require('fs')

let path = require('path');
const port = 3000

app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname +'/view/index.html'));
})

app.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname +'/view/create.html'));
})


app.get('/edit/view/:id', (req, res) => {
  res.sendFile(path.join(__dirname +'/view/edit.html'));
})

app.get('/single/:id', (req, res) => {
  res.sendFile(path.join(__dirname +'/view/card.html'));
})

app.get('/cards', (req, res) => {
  fs.readFile('data.json', function (err, data) {
    let json = JSON.parse(data)
    res.send(json.cards)
  })
})

app.post('/card/create', function(req, res) {
  id = generator.generateRandom();
  full_name = req.body.name;
  occupation = req.body['job-title'];
  company = req.body['company-name'];
  date_of_birth = req.body.dob;

  // storing of image
  const file = req.files.img;

  const path = __dirname + "/public/images/" + file.name;

  info = {
    id_no: id,
    name: full_name,
    company_name: company,
    job_title: occupation,
    dob: date_of_birth,
    img_url: file.name,
    created_at: Date.now(),
    updated_at: Date.now()
  }

  file.mv(path, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
  });
  
  fs.readFile('data.json', function (err, data) {
    let json = JSON.parse(data)
    json.cards.push(info)
    fs.writeFile('data.json', JSON.stringify(json), function (err) {
      if (err) throw err;
    });
  })

  // redirect to home route (/)
  res.redirect("/");
});

app.get('/card/:id', (req, res) => {
  const ID = req.params.id;
  fs.readFile('data.json', function (err, data) {
    json = JSON.parse(data)
    json.cards.forEach(ele => {
      if (ele.id_no.toString() === ID){
        res.send(ele)
      }
    });
  })
})

app.get('/card/delete/:id', (req, res) => {
  const ID = req.params.id;
  fs.readFile('data.json', function (err, data) {
    let json = JSON.parse(data)
    json.cards.forEach((ele,index)=>{
      if(ele.id_no === Number(ID)){
        json.cards.splice(index,1);
        fs.writeFile('data.json', JSON.stringify(json), function (err) {
          res.redirect("/");
        });
      }
    })
  })
})

app.post('/card/edit/:id', (req, res) => {
  id = Number(req.params.id);
  full_name = req.body.name;
  occupation = req.body['job-title'];
  company = req.body['company-name'];
  date_of_birth = req.body.dob;

  // // storing of image
  const file = req.files.img;
  const path = __dirname + "/public/images/" + file.name;

  info = {
    id_no: id,
    name: full_name,
    company_name: company,
    job_title: occupation,
    dob: date_of_birth,
    img_url: file.name,
    created_at: Date.now(),
    updated_at: Date.now()
  }

  file.mv(path, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
  });
  
  fs.readFile('data.json', function (err, data) {
    let json = JSON.parse(data)
    json.cards.forEach((ele,index)=>{
      if(ele.id_no === id){
        json.cards.splice(index,1,info);
        fs.writeFile('data.json', JSON.stringify(json), function (err) {
          res.redirect("/");
        });
      }
    })
  })
})


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})