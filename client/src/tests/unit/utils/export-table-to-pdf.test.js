import jsPDF from 'jspdf';
import 'jspdf-autotable';
import exportTableToPdf from '../../../utils/export-table-to-pdf';

jest.mock('jspdf');
jest.mock('jspdf-autotable');

describe('export table to pdf utils', () => {
  beforeEach(() => {
    jsPDF.mockImplementation(() => ({
      text: (...textValue) => ({}),
      autoTable: (content) => ({}),
      save: (pdfName) => jest.fn(),
    }));
  });
  it('should return empty object table data is empty', () => {
    expect.assertions(1);
    const pdfRef = exportTableToPdf({ sortedData: [] });
    expect(pdfRef).toEqual({});
  });

  it('should return jspdf object successfully when table data is passed', () => {
    expect.assertions(3);
    const pdfRef = exportTableToPdf(tableData);
    expect(pdfRef).toHaveProperty('text');
    expect(pdfRef).toHaveProperty('autoTable');
    expect(pdfRef).toHaveProperty('save');
  });
});
