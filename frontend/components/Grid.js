import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import StyledGrid from "../components/styles/StyledGrid";
import router from "next/router";

class Grid extends Component {
  state = {
    columnDefs: [],
    rowData: []
  };

  componentDidMount() {
    const newColDefs = this.parseColumnDefs(this.props.data);
    this.setState({ columnDefs: newColDefs, rowData: this.props.data });
  }

  onGridReady = params => {
    this.api = params.api;
    this.columnApi = params.columnApi;
  };

  handleRowDoubleClicked = row => {
    router.push({ pathname: "/recipe", query: { id: row.data.id } });
  };

  parseColumnDefs = data => {
    console.log(data);
    const firstItem = data[0];
    console.log(firstItem);
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
