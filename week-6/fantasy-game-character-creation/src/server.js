const http = require('http');
const url = require('url');

// Store character in memory
let character = null;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Create character
  if (req.method === 'POST' && pathname === '/create') {
    const { class: charClass, gender, fact } = parsedUrl.query;

    character = {
      class: charClass,
      gender: gender,
      fact: fact
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: 'Character created',
      character
    }));
  }

  // Confirm character
  else if (req.method === 'POST' && pathname === '/confirm') {
    if (character) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        message: 'Character confirmed',
        character
      }));
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('No character to confirm');
    }
  }

  // View character
  else if (req.method === 'GET' && pathname === '/view') {
    if (character) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(character));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('No character found');
    }
  }

  // Default route
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;