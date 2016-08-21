var koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');

var app = koa();

var router = new Router();

router.get('/', function *() {
  this.body = '<form action="/" method="POST">' +
    '<input type="TEXT" name="content">' +
    '<input type="TEXT" name="msg">' +
    '<input type="submit">' +
    '</form>';
});

router.post('/', function *() {
  this.body = this.request.body.content + ':' + this.request.body.msg;
});

app.use(bodyParser());
app.use(router.middleware());
app.listen(3000);
