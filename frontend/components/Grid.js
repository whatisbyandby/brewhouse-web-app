import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import StyledGrid from "../components/styles/StyledGrid";
import router from "next/router";
import formatVolume from "../utils/formatVolume";
import formatEnum from "../utils/formatEnum";

class Grid extends Component {
  state = {
    columnDefs: [],
    rowData: []
  };

  componentDidMount() {
    const newColDefs = this.parseColumnDefs(this.props.data);
    const mappedRowData = this.mapRowData(this.props.data);
    this.setState({ columnDefs: newColDefs, rowData: mappedRowData });
  }

  onGridReady = params => {
    this.api = params.api;
    this.columnApi = params.columnApi;
  };

  handleRowDoubleClicked = row => {
    router.push({ pathname: "/recipe", query: { id: row.data.id } });
  };

  mapRowData = rowData => {
    const mappedRowData = rowData.map(row => ({
      id: row.id,
      name: row.name,
      type: formatEnum(row.type),
      style: row.style,
      batchSize: formatVolume(row.batchSize)
    }));
    return mappedRowData;
  };

  parseColumnDefs = data => {
    const firstItem = data[0];
    const keys = Object.keys(firstItem);
    const colDefs = keys
      .filter(key => !key.startsWith("_") && key !== "id")
      .map(key => ({
        headerName: key.toUpperCase(),
        field: key
      }));
    return colDefs;
  };

  render() {
    return (
      <StyledGrid>
        <div
          className="ag-theme-balham"
          style={{ height: "600px", width: "100%" }}
        >
          <AgGridReact
            rowSelection="single"
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            onGridReady={this.onGridReady}
            onRowDoubleClicked={this.handleRowDoubleClicked}
          />
        </div>
      </StyledGrid>
    );
  }
}

export default Grid;
