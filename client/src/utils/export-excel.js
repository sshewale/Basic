import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
/**
 * This function generate and download excel file
 * @param {*} excelData is a json array of objects
 * @param {*} fileName
 */
function exportExcel(excelData, fileName) {
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
  const workSheet = XLSX.utils.json_to_sheet(excelData);
  const workBook = { Sheets: { data: workSheet }, SheetNames: ['data'] };
  const excelBuffer = XLSX.write(workBook, { bookType: 'xlsx', type: 'array' });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, fileName + fileExtension);
}

export default exportExcel;
