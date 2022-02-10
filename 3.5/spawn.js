const spawn = require('child_process').spawn;

var process = spawn('python', ['3.5/test.py']);
// var process = spawn('python', ['3.5/test.py'], { shell: true }); // 3번 째 인수는 exec처럼 셸을 실행해서 명령어 수행

process.stdout.on('data', function(data) {
  console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
  console.error(data.toString());
}); // 실행 에러
