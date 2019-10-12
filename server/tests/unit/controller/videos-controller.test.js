let request = require('supertest');
const server = require('../../../index');
const videoData = require('../../../services/videos-db-service');

request = request.agent(server);

jest.mock('../../../services/videos-db-service');

const videoRecords = [
  {
    id: 1,
    reference_id: 'videoId_G6_Chp10_L9_LC_EN_ref',
    account_id: 1,
    db_updated_at: '2019-10-01T05:24:02.903Z',
    db_created_at: '2019-10-01T05:24:02.903Z',
    VideoInfos: [
      {
        id: 5,
        video_id: 1,
        bc_video_id: '5811573390001',
        reference_id: 'ref_5811573390001',
        name: null,
        original_file_name: 'videoId_2560027617001',
        tags: null,
        created_at: '2018-07-20T08:41:17.827Z',
        created_by: null,
        updated_at: '2019-03-18T10:21:42.712Z',
        updated_by: 'mukesh.jha@indecomm.net',
        published_at: '2018-07-20T08:41:17.827Z',
        state: 'ACTIVE',
        short_description: null,
        long_description: null,
        db_updated_at: '2019-10-01T05:24:02.909Z',
        db_created_at: '2019-10-01T05:24:02.909Z',
      },
    ],
    Renditions: [],
  },
  {
    id: 2,
    reference_id: 'ref_5801996867001',
    account_id: 1,
    db_updated_at: '2019-10-01T05:24:02.903Z',
    db_created_at: '2019-10-01T05:24:02.903Z',
    VideoInfos: [],
    Renditions: [],
  },
  {
    id: 3,
    reference_id: 'ref_5811580819001',
    account_id: 1,
    db_updated_at: '2019-10-01T05:24:02.903Z',
    db_created_at: '2019-10-01T05:24:02.903Z',
    VideoInfos: [],
    Renditions: [
      {
        id: 6,
        video_id: 3,
        rendition_url: 'www.google.com',
        dimensions: '120x140',
        upload_date: '2019-10-01T05:24:02.914Z',
        db_updated_at: '2019-10-01T05:24:02.914Z',
        db_created_at: '2019-10-01T05:24:02.914Z',
      },
    ],
  },
];

afterEach(() => {
  server.close();
});

describe('videos-controller', () => {
  it('should return video response with status 200', async () => {
    videoData.mockResolvedValue(videoRecords);
    const response = await request.get('/api/videos');
    const videoRecordsObj = response.body[0];
    expect.assertions(5);
    expect(videoRecordsObj).toHaveProperty('reference_id');
    expect(videoRecordsObj).toHaveProperty('account_id');
    expect(videoRecordsObj).toHaveProperty('VideoInfos');
    expect(videoRecordsObj).toHaveProperty('Renditions');
    expect(response.status).toEqual(200);
  });

  it('should throw Not Found 404 if video records not present', async () => {
    videoData.mockResolvedValue([]);
    const response = await request.get('/api/videos');
    expect.assertions(2);
    expect(response.status).toEqual(404);
    expect(response.body.length).toBe(0);
  });
});
