import React, { Component } from 'react';
import { Menu, Button } from '@material-ui/core';
import MenuItems from './menu-items';
import exportExcel from '../../utils/export-excel';
import globalVariables from '../../globals/gobal-variables';
import exportTableToPdf from '../../utils/export-table-to-pdf';
import AlertDialog from '../common/alert-dialog/alert-dialog';

class ExportMenu extends Component {
  state = {
    anchorEl: null,
    buttonText: 'Export',
    openDialog: false,
    alertMessage: null,
  };

  handleExportButtonClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleExportMenu = (exportOptionValue, refData, exportFileName) => {
    const exportOption = exportOptionValue.toString().toLowerCase();

    if (refData.current.dataManager.sortedData.length <= 0) {
      this.setState({
        openDialog: true,
        alertMessage: 'No records found to export.',
      });
    } else {
      exportOption === 'excel'
        ? this.handleExcelReport(refData, exportFileName)
        : exportOption === 'pdf'
        ? exportTableToPdf(refData.current.dataManager, exportFileName)
        : this.setState({
            openDialog: true,
            alertMessage: `${exportOptionValue} export functionality is not implemented yet ...!!!`,
          });
    }

    this.setState({ anchorEl: null });
  };

  handleExcelReport = (refData, exportFileName) => {
    const columns = refData.current.props.columns;
    const reportData = refData.current.dataManager.sortedData;
    const formatedJsonData = reportData.map((reportValue) => {
      var mapColumnObject = {};
      columns.forEach((element) => {
        mapColumnObject[element.title] = reportValue[element.field];
      });
      return mapColumnObject;
    });
    exportExcel(formatedJsonData, exportFileName);
  };

  handleAlertClose = () => {
    this.setState({
      openDialog: false,
    });
  };

  render() {
    const { anchorEl, buttonText, openDialog, alertMessage } = this.state;
    const { tableRef, exportFileName } = this.props;
    let { exportOptions } = globalVariables;
    const refData = tableRef;
    let exportButtonclass;
    if (!refData || !exportFileName || !exportOptions) {
      exportButtonclass = 'Mui-disabled';
      exportOptions = ['Undefined'];
    }

    return (
      <>
        <Button
          id="export-button"
          aria-controls="export-menu"
          aria-haspopup="true"
          onClick={this.handleExportButtonClick}
          variant="contained"
          color="primary"
          size="large"
          style={{ padding: '0 10px', bottom: '45px', left: '140px' }}
          className={exportButtonclass}
        >
          {buttonText}
        </Button>
        <Menu
          id="menu-component"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={this.handleMenuClose}
          style={{ top: '30px' }}
        >
          <MenuItems
            id="menuItems-component"
            items={exportOptions}
            onExport={(item) =>
              this.handleExportMenu(item, refData, exportFileName)
            }
          />
        </Menu>
        <AlertDialog
          onClose={this.handleAlertClose}
          alertMessage={alertMessage}
          openDialog={openDialog}
        />
      </>
    );
  }
}

export default ExportMenu;
