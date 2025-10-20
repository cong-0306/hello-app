// 간단 헬스체크/버전 확인용 서버
const http = require('http');
const PORT = process.env.PORT || 8080;
const VERSION = process.env.APP_VERSION || 'dev';

const server = http.createServer((req, res) => {
  if (req.url === '/healthz') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    return res.end('ok');
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Hello from hello-app! version=${VERSION}\n`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

