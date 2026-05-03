const http = require('http');
const server = require('../src/server');

// Helper function to make HTTP requests
function makeRequest(options) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          body: data
        });
      });
    });

    req.on('error', reject);
    req.end();
  });
}

// Close server after tests
afterAll(() => {
  server.close();
});

test('POST /create should create a character', async () => {
  const response = await makeRequest({
    hostname: 'localhost',
    port: 3000,
    path: '/create?class=Warrior&gender=Male&fact=Strong',
    method: 'POST'
  });

  expect(response.status).toBe(200);
  expect(response.body).toContain('Character created');
});

test('POST /confirm should confirm character', async () => {
  const response = await makeRequest({
    hostname: 'localhost',
    port: 3000,
    path: '/confirm',
    method: 'POST'
  });

  expect(response.status).toBe(200);
  expect(response.body).toContain('Character confirmed');
});

test('GET /view should return the created character', async () => {
  const response = await makeRequest({
    hostname: 'localhost',
    port: 3000,
    path: '/view',
    method: 'GET'
  });

  expect(response.status).toBe(200);
  expect(response.body).toContain('Warrior');
});