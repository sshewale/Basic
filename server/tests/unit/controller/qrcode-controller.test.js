let request = require('supertest');
const server = require('../../../index');
const { postCodes } = require('../../../services/db-service');

request = request.agent(server);

jest.mock('../../../services/db-service');

afterEach(() => {
  server.close();
});

describe('code-controller', () => {
  it('post api endpoint should return post code response with status 200', async () => {
    postCodes.mockResolvedValue(codeRecords);
    expect.assertions(1);
    const codeResponse = await request.post('/api/codes').send(postCodeInput);
    expect(codeResponse.status).toEqual(200);
  });

  it('post api endpoint should throw bad request 400 if code post input body is empty', async () => {
    expect.assertions(2);
    const postCodeInput = {};
    const codeResponse = await request.post('/api/codes').send(postCodeInput);
    expect(codeResponse.status).toEqual(400);
    expect(codeResponse.body).toEqual({
      message: 'Request body is null, Please check body parameters',
    });
  });
});
