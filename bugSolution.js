const http = require('http');
const { Worker } = require('worker_threads');

const server = http.createServer((req, res) => {
  const worker = new Worker('./long-running-task.js');

  worker.on('message', (result) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Result: ${result}`);
  });

  worker.on('error', (err) => {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(`Error: ${err.message}`);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// long-running-task.js
let count = 0;
for (let i = 0; i < 1000000000; i++) {
  count++;
}
console.log(count);