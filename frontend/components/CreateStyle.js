import React, { Component } from "react";
import styled from "styled-components";

const CreateStyleForm = styled.form`
  fieldset {
    display: grid;
    grid-auto-columns: 200px;
  }
  label {
    display: block;
  }
  input {
    display: block;
  }
`;

class CreateStyle extends Component {
  state = {
    name: "",
    category: "",
    categoryNumber: "",
    styleLetter: "",
    styleGuide: "",
    type: "",
    OGMin: "",
    OGMax: "",
    FGMin: "",
    FGMax: "",
    IBUMin: "",
    IBUMax: "",
    colorMin: "",
    colorMax: "",
    carbMin: "",
    carbMax: "",
    ABVMin: "",
    ABVMax: "",
    notes: "",
    profile: "",
    ingredients: "",
    example: ""
  };

  handleOnChange = event => {
    const { name, type, value } = event.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <CreateStyleForm>
        <fieldset>
          <label htmlFor="name">
            Style Name
            <input
              type="text"
              placeholder="Style Name"
              value={this.state.name}
              onChange={this.handleOnChange}
            />
          </label>
          <label htmlFor="OGMin">
            OG Min
            <input
              type="number"
              value={this.state.name}
              onChange={this.handleOnChange}
            />
          </label>
          <button type="submit">Save</button>
        </fieldset>
      </CreateStyleForm>
    );
  }
}

export default CreateStyle;
