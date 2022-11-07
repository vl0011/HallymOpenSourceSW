const express = require ('express');
const nunjucks = require('nunjucks');

const app = express();

const debug_port = 8000;

app.set('view engine', 'html'); // 확장자를 html 로도 사용이 가능함.
nunjucks.configure('template', { // views폴더가 넌적스파일의 위치가 됨
    express: app,
    watch: true,
});
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/link', function (req, res) {
    res.render('page/link');
});

app.get('/home', function (req, res) {
    res.render('page/home');
});

app.get('/animal', function (req, res) {
    res.render('page/animal');
});

app.get('/animal_g', function (req, res) {
    res.render('page/animal_g');
});

app.get('/fruit', function (req, res) {
    res.render('page/fruit');
});

app.get('/hallym', function (req, res) {
    res.render('page/hallym');
});

let server = app.listen(debug_port, function () {
});
