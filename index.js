const http = require('http');

const port = 3000; // Порт, на якому буде працювати сервер

// Створення HTTP-сервера
const server = http.createServer((req, res) => {
  // Повідомляємо, що формат буде HTML, щоб браузер його відобразив
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  const url = req.url;

  if (url === '/about') {
    res.write('<h1>about us page</h1>');
    res.end();
  } else if (url === '/contact') {
    res.write('<h1>contact us page</h1>');
    res.end();
  } else {
    res.write('<h1>Hello World!</h1>');
    res.write('<h2>My name Artur</h2>');
    res.end();
  }
});

// Прослуховування порту та адреси сервера
server.listen(port, () => {
  console.log(`server start at http://localhost:${port}/`);
});
