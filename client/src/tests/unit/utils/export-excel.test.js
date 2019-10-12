import FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import exportExcel from '../../../utils/export-excel';

const excelData = [
  {
    columnName: 'value',
  },
];

const testWorkSheet = {
  '!ref': 'A1:G2',
  A1: {
    t: 's',
    v: '"columnName"',
  },
  A2: {
    t: 's',
    v: 'value',
  },
};

const defaultFileName = 'testDownlaodFile';
const userFileName = 'abc';

const bufferData = {
  Int8Array: [80, 75, 3, 32],
  Int16Array: [19280, 8752, 257],
  Uint8Array: [80, 75, 108, 32],
};

jest.mock('file-saver', () => ({ saveAs: jest.fn() }));
jest.mock('xlsx');

describe('export excel util', () => {
  it('The FileSaver.save() function is called with default download filename parameter.', () => {
    XLSX.utils.json_to_sheet.mockReturnValue(testWorkSheet);
    XLSX.write.mockReturnValue(bufferData);
    global.Blob = function([bufferData], options) {
      return { bufferData, options };
    };
    exportExcel(excelData, defaultFileName);
    expect.assertions(2);
    expect(XLSX.write).toBeCalled();
    expect(FileSaver.saveAs).toHaveBeenCalledWith(
      {
        bufferData: {
          Int8Array: [80, 75, 3, 32],
          Int16Array: [19280, 8752, 257],
          Uint8Array: [80, 75, 108, 32],
        },
        options: {
          type:
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
        },
      },
      'testDownlaodFile.xlsx',
    );
  });

  it('The FileSaver.save() function is called successfully even change download filename parameter by user', () => {
    XLSX.utils.json_to_sheet.mockReturnValue(testWorkSheet);
    XLSX.write.mockReturnValue(bufferData);
    global.Blob = function([bufferData], options) {
      return { bufferData, options };
    };
    exportExcel(excelData, userFileName);
    expect.assertions(2);
    expect(XLSX.write).toBeCalled();
    expect(FileSaver.saveAs).toHaveBeenCalledWith(
      {
        bufferData: {
          Int8Array: [80, 75, 3, 32],
          Int16Array: [19280, 8752, 257],
          Uint8Array: [80, 75, 108, 32],
        },
        options: {
          type:
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
        },
      },
      'abc.xlsx',
    );
  });

  it('The FileSaver.save() function will not called if option MIME type and file extention is not match', () => {
    XLSX.utils.json_to_sheet.mockReturnValue(testWorkSheet);
    XLSX.write.mockReturnValue(bufferData);
    global.Blob = function([bufferData], options) {
      return { bufferData, options };
    };
    exportExcel(excelData, userFileName);
    expect.assertions(3);
    expect(XLSX.write).toBeCalled();
    expect(FileSaver.saveAs).not.toHaveBeenCalledWith(
      {
        bufferData: {
          Int8Array: [80, 75, 3, 32],
          Int16Array: [19280, 8752, 257],
          Uint8Array: [80, 75, 108, 32],
        },
        options: {
          type: 'application/pdf',
        },
      },
      'abc.xlsx',
    );
    expect(FileSaver.saveAs).not.toHaveBeenCalledWith(
      {
        bufferData: {
          Int8Array: [80, 75, 3, 32],
          Int16Array: [19280, 8752, 257],
          Uint8Array: [80, 75, 108, 32],
        },
        options: {
          type: 'application/pdf',
        },
      },
      'abc.pdf',
    );
  });
});
