import React, { Component } from 'react';
import path from 'path';
import fetchcodesData from '../../services/codes-service';
import DataTable from '../common/data-table/data-table';
import globalVariables from '../../globals/gobal-variables';
import createBunyanLogger from '../../utils/bunyan-logger-util';

const log = createBunyanLogger(path.basename(__filename));

class codesTable extends Component {
  state = {
    codesData: [],
    columnHeadings: [],
  };

  async componentDidMount() {
    try {
      const { data: codesData } = await fetchcodesData();
      const columnHeadings = this.setColumnHeadings(codesData);
      this.setState({ codesData, columnHeadings });
    } catch (error) {
      log.error(error);
    }
  }

  setColumnHeadings(tableData) {
    const headings = Object.keys({ ...tableData[0] });
    const { codesTableHeadings } = globalVariables;
    let columnHeadings = [];
    columnHeadings = headings.map((heading, index) => ({
      title: codesTableHeadings[index],
      field: heading,
    }));

    return columnHeadings;
  }

  render() {
    const { codesData, columnHeadings } = this.state;
    const { codesTableTitle, exportFileName } = globalVariables;

    return (
      <div id="codes-table-container">
        {codesData.length > 0 ? (
          <DataTable
            tableTitle={codesTableTitle}
            headings={columnHeadings}
            tableData={codesData}
            exportFileName={exportFileName}
          />
        ) : (
          <DataTable
            tableTitle={codesTableTitle}
            exportFileName={exportFileName}
          />
        )}
      </div>
    );
  }
}

export default codesTable;
