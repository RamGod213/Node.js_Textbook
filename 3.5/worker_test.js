const {
  Worker, isMainThread, parentPort,
} = require('worker_threads');

console.log('isMainThread : ' + isMainThread);

if (isMainThread) { // 부모일 때
  const worker = new Worker(__filename);
  console.log('__filename : ' + __filename);
  worker.on('message', message => console.log('from worker', message));
  worker.on('exit', () => console.log('worker exit'));
  worker.postMessage('ping');
} else { // 워커일 때
  // parentPort.on('message', (value) => {
  //   console.log('from parent', value);
  //   parentPort.postMessage('pong');
  //   parentPort.close();
  // });
}
