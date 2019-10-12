import React, { Component, forwardRef } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import ExportMenu from './../../export-menu/export-menu';
import {
  AddBox,
  ArrowUpward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  SaveAlt,
  Search,
  ViewColumn,
} from '@material-ui/icons';

class DataTable extends Component {
  state = {
    tableIcons: {
      Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
      Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
      Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Delete: forwardRef((props, ref) => (
        <DeleteOutline {...props} ref={ref} />
      )),
      DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
      )),
      Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
      Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
      Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
      FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
      LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
      NextPage: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
      )),
      PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
      )),
      ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
      SortArrow: forwardRef((props, ref) => (
        <ArrowUpward {...props} ref={ref} />
      )),
      ViewColumn: forwardRef((props, ref) => (
        <ViewColumn {...props} ref={ref} />
      )),
    },
    openDialog: false,
  };

  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }

  render() {
    const { tableIcons } = this.state;
    const {
      headings: columns,
      tableData,
      tableTitle,
      exportFileName,
    } = this.props;
    // overide material-table component toolbar by adding ExportMenu component
    const exportComponent = {
      Toolbar: (props) => (
        <>
          <MTableToolbar {...props} />
          <ExportMenu
            tableRef={this.tableRef}
            exportFileName={exportFileName}
          />
        </>
      ),
    };
    let materialTableComponent;
    if (typeof tableData === 'undefined') {
      materialTableComponent = (
        <MaterialTable
          title={tableTitle}
          columns={columns}
          data={tableData}
          icons={tableIcons}
          tableRef={this.tableRef}
        />
      );
    } else {
      materialTableComponent = (
        <MaterialTable
          title={tableTitle}
          columns={columns}
          data={tableData}
          icons={tableIcons}
          tableRef={this.tableRef}
          components={exportComponent}
        />
      );
    }
    return (
      <div id="material-table-container" style={{ maxWidth: '100%' }}>
        {materialTableComponent}
      </div>
    );
  }
}

export default DataTable;
