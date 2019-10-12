let request = require('supertest');
const server = require('../../index');
const db = require('../../db');

request = request.agent(server);

const program = {
  id: 1,
  account_id: 1,
  program_name: 'ABC test',
  db_updated_at: '2019-10-01T09:17:33.465Z',
  db_created_at: '2019-10-01T09:17:33.465Z',
};

async function deleteTestDb() {
  await db.Program.destroy({
    where: {},
    truncate: { cascade: true },
  });
}

async function insertTestsInTestDb() {
  await deleteTestDb();
  await db.Program.create(program);
}

describe('controller', () => {
  afterEach(() => {
    server.close();
  });

  afterAll(() => {
    db.sequelize.close();
  });

  it('get api endpoint should return response with status 200', async () => {
    await insertTestsInTestDb();
    const response = await request.get('/api/codes');
    expect.assertions(1);
    expect(response.status).toEqual(200);
  });

  it('get api endpoint should return status 404 if codes records not present', async () => {
    await deleteTestDb();
    const response = await request.get('/api/codes');
    expect.assertions(2);
    expect(response.status).toEqual(404);
    expect(response.body).toEqual([]);
  });

  it('post api endpoint should return response with status 200', async () => {
    const CodeBodyInput = ['dsa'];
    const response = await request.post('/api/codes').send(CodeBodyInput);
    expect.assertions(1);
    expect(response.status).toEqual(200);
  });

  it('post api endpoint should throw bad request 400 if code post input body is empty', async () => {
    const CodeBodyInput = [];
    const response = await request.post('/api/codes').send(CodeBodyInput);
    expect.assertions(1);
    expect(response.status).toEqual(400);
  });
});
