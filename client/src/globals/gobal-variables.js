const globalVariables = {
  codesTableTitle: 'Profile',
  codesTableHeadings: ['Name', 'Age'],
  exportFileName: 'download',
  exportOptions: ['PDF', 'Excel'],
  exportTableToPdfConfiguration: {
    startY: 70,
    margin: { horizontal: 10, vertical: 10 },
    columnStyles: { 0: { cellWidth: 240 }, 1: { cellWidth: 240 } },
    styles: { overflow: 'linebreak' },
    rowPageBreak: 'avoid',
    theme: 'grid',
    headStyles: {
      halign: 'center',
      valign: 'middle',
      fillColor: [211, 211, 211],
      lineWidth: 0.1,
      lineColor: 200,
      textColor: 'black',
    },
  },
};

export default globalVariables;
