const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
  fs.readFile('./server2.html')
  .then((data) => {
    console.log( '정상 호출 되었습니다' );
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });    
    res.end(data);
  })
  .catch((err) => {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end( '에러 내용 : ' + err.message);
  })  
})
  .listen(8081, () => {
    console.log('8081번 포트에서 서버 대기 중입니다!');
  });
