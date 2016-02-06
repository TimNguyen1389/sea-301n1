var express = require('express');
var app = express();
var config = require('./config');
var DB = config.DB;
var PORT = config.PORT;
var models = require('./models');
var rawData = require('./data/hackerIpsum.json');
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/articles', function(req, res) {
  models.Article.findAll().then(function(articles) {
    res.json(articles)
  })
});

models.sequelize.sync({force: true}).then(function(x) {
  rawData.forEach(function(item) {
  models.Article.create({
    title: item.title,
    category: item.category,
    author: item.author,
    authorUrl: item.authorUrl,
    publishedOn: item.publishedOn,
    body: item.body
  })
})

app.listen(PORT, function() {
  console.log('server started');
  console.log('listening on PORT: ' + PORT);
  console.log('DB URI STRING: ' + DB)
  })
});
