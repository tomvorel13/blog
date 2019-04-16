const express = require('express');
const compression = require('compression');
const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(compression());

    server.get('/blog/:slug', (req, res) => {
      const nextJsPage = '/post';
      const queryParams = { slug: req.params.slug };
      app.render(req, res, nextJsPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready http://localhost:3000 <');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
