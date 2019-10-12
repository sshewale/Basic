import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import codesTable from '../../../../components/codes/codes-table';

configure({ adapter: new Adapter() });



const columnHeadings = [
  { title: 'broken-QR-url', field: 'brokenQRurl' },
  { title: 'new-QR-URL', field: 'newQRURL' },
  { title: 'accountID', field: 'accountID' },
  { title: 'videoID', field: 'videoID' },
  { title: 'refID', field: 'refID' },
  { title: 'videoName', field: 'videoName' },
  { title: 'programName', field: 'programName' },
];

describe('codes table component', () => {
  const state = {
    codesData: codesData.data,
    columnHeadings: columnHeadings,
  };

  const codesTable = shallow(<codesTable />);
  it('should render codes component container', () => {
    expect.assertions(1);
    expect(codesTable.find('div#codes-table-container').length).toEqual(1);
  });

  it('should display no-record-fallback when data is not present', () => {
    state.codesData = [];
    state.columnHeadings = [];
    codesTable.setState(state);
    expect.assertions(2);
    expect(codesTable.instance().state).toEqual(state);
    expect(codesTable.find('DataTable').length).toEqual(1);
  });

  it('should display show DataTable when data is present', () => {
    state.codesData = codesData.data;
    state.columnHeadings = columnHeadings;

    codesTable.setState(state);
    expect.assertions(2);
    expect(codesTable.instance().state).toEqual(state);
    expect(codesTable.find('DataTable').length).toEqual(1);
  });
});
