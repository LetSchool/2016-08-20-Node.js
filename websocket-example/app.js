var koa = require('koa');
var serve = require('koa-static');
var Router = require('koa-router');
var websockify = require('koa-websocket');
var events = require('events');

var app = koa();
var socket = websockify(app);

app.use(serve('./public'));

var eventEmitter = new events.EventEmitter();

var wsRouter = new Router();
wsRouter.get('/', function *() {
  var self = this;

  this.websocket.send('Welcome');
  this.websocket.on('message', function(msg) {
    eventEmitter.emit('update', msg);
  });

  eventEmitter.on('update', function(message) {
    self.websocket.send(message);
  });
});

app.ws
  .use(wsRouter.routes())
  .use(wsRouter.allowedMethods());

app.listen(3000);
