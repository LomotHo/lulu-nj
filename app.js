const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const path = require('path');
const templating = require('./unit/templating');
const controller = require('./controller');
const errHandler = require('./unit/err-handler');
// const authentication = require('./unit/authentication');
const config = require('./config');
const isProduction = process.env.NODE_ENV === 'production';
const static = require('koa-static');

// record URL
app.use(async (ctx, next) => {
    console.log(ctx.request.method + ' ' + ctx.request.url);
    await next();
});

// static files, Vue view
const home = static(path.join(__dirname)+'/static/');
app.use(home);

// bodyParser
app.use(bodyParser());

// add nunjucks as view, add ctx.render
app.use(templating('src/view', {
    noCache: !isProduction,
    watch: !isProduction
}));

// err handel
app.use(errHandler.handler());

// Controler & router
app.use(controller(path.resolve(__dirname, './controller')));

app.listen(config.localPort);
console.log('app started at port ' + config.localPort +'...');
