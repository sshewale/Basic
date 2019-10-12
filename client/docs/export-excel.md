#https://www.npmjs.com/package/xlsx

For writing, the first step is to generate output data. The helper functions of XLSX write and writeFile will produce the data in various formats suitable for dissemination.
Here : in our project to generate excel file use XLSX.utils.json_to_sheet function of library. It means to create excel sheet need json data as input.
XLSX.utils.json_to_sheet takes an array of objects and returns a worksheet with automatically-generated "headers" based on the keys of the objects.
read more : https://www.npmjs.com/package/xlsx#array-of-objects-input

#https://www.npmjs.com/package/file-saver
To saving files on the client-side use file-saver, which is perfect for web apps that generates files on the client,

Other Reference : https://blog.bitsrc.io/exporting-data-to-excel-with-react-6943d7775a92

MIME type for excel : application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8
https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
For application : https://www.iana.org/assignments/media-types/media-types.xhtml#application
