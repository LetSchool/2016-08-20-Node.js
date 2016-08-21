var koa = require('koa');
var serve = require('koa-static');
var Router = require('koa-router');
var websockify = require('koa-websocket');

var app = koa();
var socket = websockify(app);

app.use(serve('./public'));


var wsRouter = new Router();
wsRouter.get('/', function *() {
  this.websocket.send('Welcome');
  this.websocket.on('message', function(msg) {
    console.log(msg);
  });
});

app.ws
  .use(wsRouter.routes())
  .use(wsRouter.allowedMethods());

app.listen(3000);
