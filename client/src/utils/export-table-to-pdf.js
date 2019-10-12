import jsPDF from 'jspdf';
import 'jspdf-autotable';
import globalVariables from '../globals/gobal-variables';

export default function exportTableToPdf(tableDetails) {
  const unit = 'pt';
  const size = 'A4';
  const orientation = 'landscape';
  const pdfDoc = new jsPDF(orientation, unit, size);

  if (tableDetails.sortedData.length <= 0) {
    return {};
  }
  const tableBodyData = tableDetails.sortedData.map((data) =>
    Object.values(data),
  );

  const contentToExport = {
    ...globalVariables.exportTableToPdfConfiguration,
    head: [globalVariables.codesTableHeadings],
    body: tableBodyData,
  };

  pdfDoc.text(globalVariables.codesTableTitle, 400, 40);
  pdfDoc.autoTable(contentToExport);
  pdfDoc.save(globalVariables.exportFileName);
  return pdfDoc;
}
