const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

console.log('process.env.COOKIE_SECRET : ', process.env.COOKIE_SECRET);

// morgan 미들웨어 사용법. 
app.use(morgan('dev')); // combined, common, short, tiny 등의 인수가 있음.
// app.use(morgan('tiny'));

// static 미들웨어는 정적인 파일들을 제공하는 라우터 역할. 설치필요X. express 객체 안에 존재.
// app.use('요청 경로', express.static('실제 경로'));
// 실제 경로에 파일이 없으면 자동 next 호출, 있으면 파일 응답하고 next 호출X.
// app.use('/', express.static(path.join(__dirname, 'public')));

// body-parser 미들웨어의 일부 기능이 익스프레스에 내장됨. (익스프레스 4.16.0 부터)
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // false : querystring 모듈 사용, true : qs 모듈 사용.(qs 모듈은 querystring 모듈 확장판)

// cookieParser 는 parseCookies 함수와 비슷. (parseCookies 함수는 문자열을 객체로 변환. 쿠키는 문자열.)
// app.use(cookieParser(process.env.COOKIE_SECRET));

app.use((req, res, next) => {
  res.cookie('name', 'zerocho', {
    httpOnly: false,
    secure: false,    
  });
  next();
});

// app.use(session({
//   resave: false,
//   saveUninitialized: false,
//   secret: process.env.COOKIE_SECRET,
//   cookie: {
//     httpOnly: false,
//     secure: false,
//   },
//   name: 'session-cookie',
// }));

// app.use((req, res, next) => {
//   console.log('모든 요청에 다 실행됩니다.');
//   next();
// });

app.get('/', (req, res, next) => {
  res.send('화면 표시');
  console.log('GET / 요청에서만 실행됩니다.');
  next();
}, (req, res) => {
  console.log('테스트');
  // throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');  
});