const express = require('express');
const morgan = require('morgan');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log('모든 요청에 다 실행');
  next();
});

app.get('/', (req, res, next) => {
  console.log('GET / 요청에서만 실행됩니다.');  
  res.send('Hello, Express');  
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});

