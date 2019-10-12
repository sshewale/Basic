import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExportMenu from '../../../../components/export-menu/export-menu';
import exportTableToPdf from '../../../../utils/export-table-to-pdf';

jest.mock('../../../../utils/export-table-to-pdf');
configure({ adapter: new Adapter() });

const exportMenuProps = {
  tableRef: {
    current: {
      dataManager: {
        columns: [
          {
            title: 'Broken QR Code URL',
            field: 'broken-QR-url',
            tableData: { abc: 'xyz' },
          },
        ],
        sortedData: [
          {
            accountID: '936125974001',
            brokenQRurl:
              'http://brightcove.vo.llnwd.net/pd16/media/936125974001/936125974001_1121138678001_LTV-7426-en',
            newQRURL:
              '/content/tools/common/hmhvideo/qrcode/video.html?ref:LTV-7426-en',
            programName: '',
            refID: 'LTV-7426-en',
            tableData: { id: 0 },
            videoID: '',
            videoName: '',
          },
        ],
      },
    },
  },
  fileName: 'abc',
};

describe('ExportMenu component', () => {
  let exportMenu;
  beforeAll(() => {
    exportMenu = shallow(<ExportMenu {...exportMenuProps} />);
  });
  it('should render export button of id "export-button".', () => {
    expect.assertions(1);
    expect(exportMenu.find('#export-button').length).toEqual(1);
  });
  it('should render export menu component of id "menu-component".', () => {
    expect.assertions(1);
    expect(exportMenu.find('#menu-component').length).toEqual(1);
  });
  it('should render menu items component of id "export-menu".', () => {
    expect.assertions(1);
    expect(exportMenu.find('#menuItems-component').length).toEqual(1);
  });
  it('set new state value to component', () => {
    expect.assertions(2);
    exportMenu.setState({
      buttonText: 'export',
    });
    expect(exportMenu.find('#export-button').text()).toEqual('export');
    expect(exportMenu.find('#export-button').text()).not.toEqual('Export');
  });
  it('check componet with no props value', () => {
    const exportMenuWrapper = shallow(<ExportMenu />);
    expect.assertions(1);
    expect(exportMenuWrapper.instance().props).toEqual({});
  });
  it('will check the values and props of component', () => {
    expect.assertions(1);
    expect(exportMenu).toMatchSnapshot();
  });
  it('should render alert dialog component', () => {
    expect.assertions(1);
    expect(exportMenu.find('AlertDialog').length).toEqual(1);
  });
  it('Dialog shows "No records found to export" alert message if sortedData returns empty array', () => {
    const exportMenuProps = {
      tableRef: {
        current: {
          dataManager: {
            columns: [
              {
                title: 'Broken QR Code URL',
                field: 'broken-QR-url',
                tableData: { abc: 'xyz' },
              },
            ],
            sortedData: [],
          },
        },
      },
      fileName: 'abc',
    };
    exportMenu.setProps(exportMenuProps);
    exportMenu
      .instance()
      .handleExportMenu(
        'Excel',
        exportMenuProps.tableRef,
        exportMenuProps.fileName,
      );
    expect.assertions(2);
    expect(exportMenu.instance().state.openDialog).toBeTruthy();
    expect(exportMenu.instance().state.alertMessage).toEqual(
      'No records found to export.',
    );
  });

  it('Dialog shows " $exportOptionValue export functionality is not implemented yet ...!!!" alert message if new exportOptionValue added', () => {
    exportMenu
      .instance()
      .handleExportMenu(
        'CSV',
        exportMenuProps.tableRef,
        exportMenuProps.fileName,
      );
    expect.assertions(2);
    expect(exportMenu.instance().state.openDialog).toBeTruthy();
    expect(exportMenu.instance().state.alertMessage).toEqual(
      'CSV export functionality is not implemented yet ...!!!',
    );
  });
  it('function handleExportMenu should called handleExcelReport function if parameter exportOptionValue is "Excel"', () => {
    exportMenu.instance().handleExcelReport = jest.fn();
    exportMenu
      .instance()
      .handleExportMenu(
        'Excel',
        exportMenuProps.tableRef,
        exportMenuProps.fileName,
      );
    expect.assertions(1);
    expect(exportMenu.instance().handleExcelReport).toHaveBeenCalled();
  });
  it('function handleExportMenu should called exportTableToPdf function if parameter exportOptionValue is "pdf"', () => {
    exportMenu
      .instance()
      .handleExportMenu(
        'pdf',
        exportMenuProps.tableRef,
        exportMenuProps.fileName,
      );
    expect.assertions(1);
    expect(exportTableToPdf).toHaveBeenCalled();
  });
});

describe('ExportMenu full dom rendering', () => {
  let exportMenuWrapper;
  beforeAll(() => {
    exportMenuWrapper = mount(<ExportMenu {...exportMenuProps} />);
  });
  afterAll(() => {
    exportMenuWrapper.unmount();
  });
  it('Check default component state value".', () => {
    expect.assertions(4);
    expect(exportMenuWrapper.state().anchorEl).toEqual(null);
    expect(exportMenuWrapper.state().buttonText).toEqual('Export');
    expect(exportMenuWrapper.state().openDialog).toBeFalsy();
    expect(exportMenuWrapper.state().alertMessage).toEqual(null);
  });
  it('check props of component', () => {
    expect.assertions(4);
    expect(exportMenuWrapper.props().fileName).toEqual('abc');
    expect(exportMenuWrapper.props().fileName).not.toEqual('xyz');
    expect(exportMenuWrapper.props().tableRef).toEqual(
      exportMenuProps.tableRef,
    );
    expect(exportMenuWrapper.props().tableRef).not.toEqual({ key: 'value' });
  });
  it('check setting new props value to component', () => {
    exportMenuWrapper.setProps({ fileName: 'xyz', tableRef: { key: 'value' } });
    expect.assertions(4);
    expect(exportMenuWrapper.props().fileName).toEqual('xyz');
    expect(exportMenuWrapper.props().fileName).not.toEqual('abc');
    expect(exportMenuWrapper.props().tableRef).toEqual({ key: 'value' });
    expect(exportMenuWrapper.props().tableRef).not.toEqual({});
  });
});
