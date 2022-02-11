const express = require('express');

const app = express();

// 서버가 실행될 포트를 설정. set.(키, 값)
app.set('port', process.env.PORT || 3000); // process.env.PORT 에 속성이 있다면 그걸 사용하고 없으면 3000번 사용.

// app.get(키) 로 set 데이터 가져오기
console.log('설정된 포트 확인하기 ', app.get('port'));

// get(주소, 라우터)
app.get('/', (req, res) => {
  res.send('Hello, Express');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
