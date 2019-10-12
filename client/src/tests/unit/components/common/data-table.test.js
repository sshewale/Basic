import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DataTable from '../../../../components/common/data-table/data-table';

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

const tableTitle = 'codes Filter';
const fileName = 'abc';
describe('data table component', () => {
  it('should render codes component container', () => {
    const dataTable = shallow(
      <DataTable
        tableTitle={tableTitle}
        headings={columnHeadings}
        tableData={tableData}
      />,
    );
    expect.assertions(1);
    expect(dataTable.find('div#material-table-container').length).toEqual(1);
  });

  it('should display "No records to display"\'" when props not passed', () => {
    const dataTable = mount(<DataTable />);
    const noRecordsStringIndex = dataTable
      .find('div#material-table-container')
      .html()
      .indexOf('No records to display');

    expect.assertions(2);
    expect(dataTable.instance().props).toEqual({});
    expect(noRecordsStringIndex > -1).toEqual(true);
  });

  it('should display records when props passed', () => {
    const dataTable = mount(
      <DataTable
        tableTitle={tableTitle}
        headings={columnHeadings}
        tableData={tableData}
        exportFileName={fileName}
      />,
    );

    const recordsStringIndex = dataTable
      .find('div#material-table-container')
      .html()
      .indexOf('LTV-7426-en');

    expect.assertions(5);
    expect(dataTable.instance().props.tableTitle).toEqual('codes Filter');
    expect(dataTable.instance().props.tableData).toEqual(tableData);
    expect(dataTable.instance().props.headings).toEqual(columnHeadings);
    expect(dataTable.instance().props.exportFileName).toEqual(fileName);
    expect(recordsStringIndex > -1).toEqual(true);
  });
});
