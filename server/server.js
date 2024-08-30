import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import next from 'next';
import { parse } from 'url';

dotenv.config({ path: '.env' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** Create Express */
const app = express();

/** Next.js 설정 */
const port = process.env.SERVER_PORT;
/**
 * 개발환경이아니라면 dev 옵션을 false 로 설정하고
 * 서버 시작전에 next build 를 실행해준다.
 */
const nextApp = next({ dev: true, port });
const handle = nextApp.getRequestHandler();

await nextApp.prepare();

/** Express Settings */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/** static 경로 설정 */
app.use(express.static(join(__dirname, '../', 'public')));

/** Express Router Settings */
app.use('/api', (req, res, next) => {
  res.send('hello!');
});

/** Next.js Routing */
app.get('/', (req, res) => {
  const parsedUrl = parse(req.url, true);
  const { pathname, query } = parsedUrl;
  nextApp.render(req, res, pathname, query);
});

app.get('*', (req, res) => {
  return handle(req, res);
});

app.listen(port, () => {
  console.log(`Express server listen port:${port}`);
  console.log(`http://localhost:${port}`);
});

export default app;
