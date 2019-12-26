import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import StyledGrid from "../components/styles/StyledGrid";
import router from "next/router";
import DeleteRecipe from "./DeleteRecipe";
import formatVolume from "../utils/formatVolume";
import formatEnum from "../utils/formatEnum";
import Router from "next/router";

class Grid extends Component {
  state = {
    columnDefs: [],
    rowData: [],
    selectedRows: []
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

  newRecipe = () => {
    Router.push({ pathname: "/recipe/create" });
  };

  editRecipe = () => {
    const selectedRow = this.state.selectedRows[0];
    if (selectedRow) {
      Router.push({
        pathname: "/recipe/update",
        query: { id: selectedRow.id }
      });
    }
  };

  handleRowSelected = event => {
    this.setState({ selectedRows: this.api.getSelectedRows() });
  };

  handleRowDoubleClicked = row => {
    router.push({ pathname: "/recipe/update", query: { id: row.data.id } });
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
    if (firstItem) {
      const keys = Object.keys(firstItem);
      const colDefs = keys
        .filter(key => !key.startsWith("_") && key !== "id")
        .map(key => ({
          headerName: key.toUpperCase(),
          field: key
        }));
      return colDefs;
    }
  };

  render() {
    return (
      <StyledGrid>
        <div
          className="ag-theme-balham"
          style={{ height: "600px", width: "100%" }}
        >
          <button onClick={this.newRecipe}>New</button>
          <button onClick={this.editRecipe}>Edit</button>
          <DeleteRecipe selectedRows={this.state.selectedRows} />
          <AgGridReact
            rowSelection="single"
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            onGridReady={this.onGridReady}
            onRowSelected={this.handleRowSelected}
            onRowDoubleClicked={this.handleRowDoubleClicked}
          />
        </div>
      </StyledGrid>
    );
  }
}

export default Grid;
