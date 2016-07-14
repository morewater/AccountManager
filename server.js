var webpack=require('webpack');
var app = new (require('express'))();
var port =3000;
var host = '0.0.0.0';
var webpackDevMiddleware= require('webpack-dev-middleware');
var webpackHotMiddleware= require('webpack-hot-middleware');
var config =require('./webpack.hot.config.js')
var compiler=webpack(config)

app.use(webpackDevMiddleware(compiler,{
  noInfo: true,
  publicPath:config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.get('/',function(req,res){
res.sendFile(__dirname+'/index.html')
})

app.listen(port,host,function(error){
if(error){
 console.log(error)
}else{
 console.info(" React Server started  port %s,  Http://%s:%s/",port,host,port)
}
})
