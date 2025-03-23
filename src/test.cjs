const request = require('supertest');
const pg = require('pg');
const { createServer, pool } = require('./server.cjs');

const { Pool } = pg;

describe('Server tests', () => {
    let server;

    beforeAll(() => {
        server = createServer().listen(3000);
    });

    afterAll(async () => {
        await Promise.all([
            new Promise((resolve) => server.close(resolve)),
            pool.end(),
        ]);
    });

    it('should return 500 with "It failed" when DB connection fails', async () => {
        jest.spyOn(Pool.prototype, 'connect').mockRejectedValue(new Error('Connection failed'));

        const response = await request(server).get('/');

        expect(response.status).toBe(500);
        expect(response.text).toContain('It failed');
    });

    it('should return 200 with "It works!" when DB connection succeeds', async () => {
        jest.spyOn(Pool.prototype, 'connect').mockResolvedValue({ release: jest.fn() });

        const response = await request(server).get('/');

        expect(response.status).toBe(200);
        expect(response.text).toContain('It works!');
    });
});