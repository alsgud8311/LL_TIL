import express from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' }); // 환경변수 사용

const app = express();
const port = process.env.PORT; //.env 파일에서 설정해준다

app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
  res.send('hello!');
});

app.listen(app.get('port'), () => {
  console.log(`Express server listen port:${port}`);
  console.log(`http://localhost:${port}`);
});
