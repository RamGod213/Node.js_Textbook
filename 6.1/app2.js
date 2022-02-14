const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  // res.send('Hello, Express');  
  res.sendFile(path.join(__dirname, '/index.html')); // 문자열 대신에 파일(html)로 응답하기.
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
  console.log('__dirname : ', __dirname);
});
