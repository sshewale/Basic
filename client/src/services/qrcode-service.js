import path from 'path';
import http from './http-service';
import createBunyanLogger from '../utils/bunyan-logger-util';

const log = createBunyanLogger(path.basename(__filename));

export default async function fetchcodesData() {
  try {
    const response = await http.get('/data');
    return response;
  } catch (err) {
    if (err.response) {
      log.error(err.response);
    }
    if (err.request) {
      log.error(err.request);
    }
    return err;
  }
}
