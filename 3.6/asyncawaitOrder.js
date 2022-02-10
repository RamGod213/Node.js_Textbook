const { mainModule } = require('process');

const fs = require('fs').promises;

const main = async () => {
  let data = await fs.readFile('./3.6/readme2.txt');
  console.log('1번', data.toString());

  data = await fs.readFile('./3.6/readme2.txt');
  console.log('2번', data.toString());

  data = await fs.readFile('./3.6/readme2.txt');
  console.log('3번', data.toString());
  console.log('종료');
}

console.log('시작');

// fs.readFile('./3.6/readme2.txt')
//   .then((data) => {
//     console.log('1번', data.toString());
//     return fs.readFile('./3.6/readme2.txt');
//   })
//   .then((data) => {
//     console.log('2번', data.toString());
//     return fs.readFile('./3.6/readme2.txt');
//   })
//   .then((data) => {
//     console.log('3번', data.toString());
//     console.log('끝');
//   })
//   .catch((err) => {
//     console.error(err);
//   });

main();

console.log('진짜 끝');