const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/diy', createProxyMiddleware({ 
    target: 'http://localhost:5001/', //original url
    changeOrigin: true, 
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));
app.listen(8080);