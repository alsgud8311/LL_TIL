const express = require('express');
const dotenv = require('dotenv');
const { fileURLToPath } = require('url');
const { dirname, join } = require('path');
const next = require('next');
const { parse } = require('url');
const postRouter = require('./routes/posts.js');
dotenv.config({ path: '.env' });

/** Create Express */
const app = express();

/** Next.js 설정 */
const port = process.env.SERVER_PORT;
/**
 * 개발환경이아니라면 dev 옵션을 false 로 설정하고
 * 서버 시작전에 next build 를 실행해준다.
 */
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, port });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  /** Express Settings */
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  /** static 경로 설정 */
  app.use(express.static(join(__dirname, 'src')));
  app.use('/api/post', postRouter);

  /** Next.js Routing */
  app.get('/', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    handle(req, res, parsedUrl);
  });

  app.get('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(port, () => {
    console.log(`Express server listen port:${port}`);
    console.log(`http://localhost:${port}`);
  });
});

module.exports = app;
