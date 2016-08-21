var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var Router = require('koa-router');
var views = require('koa-views');
var serve = require('koa-static');

var app = koa();
var router = new Router();

app.use(views(__dirname + '/views', {
  extension: 'pug',
  map: {
    html: 'pug'
  }
}));

var msgs = [
  { name: 'Fred', msg: 'Hi' },
  { name: 'Boy', msg: 'Hello' }
];

router.get('/', function *() {
  yield this.render('index', { msgs: msgs });
});

router.get('/leavemsg', function *() {
  yield this.render('leavemsg');
});

router.post('/post', function *() {
  var msg = {
    name: this.request.body.name,
    msg: this.request.body.msg
  };

  msgs.push(msg);

  this.redirect('/');
});

app.use(bodyParser());
app.use(serve('./public'));
app.use(router.middleware());
app.listen(3000);
