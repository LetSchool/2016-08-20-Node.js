var koa = require('koa');
var Router = require('koa-router');

var app = koa();
var router = new Router();

// GET /?id=123
router.get('/', function *() {
  this.body = this.request.query.id;
});

// GET /about/fred
router.get('/about/:name', function *() {
  this.body = 'Hi! ' + this.params.name;
});

app.use(router.middleware());
app.listen(3000);
