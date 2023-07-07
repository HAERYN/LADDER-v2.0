const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/naver',
    createProxyMiddleware({
      target: 'https://sens.apigw.ntruss.com',
      changeOrigin: true,
      pathRewrite: {
        '^/naver': ''
      }
    })
  );
};
