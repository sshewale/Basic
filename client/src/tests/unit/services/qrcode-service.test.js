import http from '../../../services/http-service';
import fetchcodesData from '../../../services/codes-service';

jest.mock('../../../services/http-service');

describe('codes-service', () => {
  it('should return empty codes response', async () => {
    http.get.mockRejectedValue([]);
    expect.assertions(1);
    const codesResponse = await fetchcodesData();
    expect(codesResponse).toEqual([]);
  });

  it('should return codes code data', async () => {
    http.get.mockResolvedValue(codesData);
    expect.assertions(1);
    const codesResponse = await fetchcodesData();
    expect(JSON.parse(codesResponse.data)).toEqual(JSON.parse(codesData.data));
  });
});
