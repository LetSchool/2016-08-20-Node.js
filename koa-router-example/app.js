var koa = require('koa');
var Router = require('koa-router');

var app = koa();
var router = new Router();

router.get('/', function *() {
  this.body = 'HOME';
});

router.get('/about', function *() {
  this.body = 'ABOUT';
});

app.use(router.middleware());
app.listen(3000);
