import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colors, breakpoints } from "../style-utilities/variables"

const StyledSuggestions = styled.ul` 
  max-width: ${breakpoints.ultraWideDesktop};
  margin: 0px auto;
  position: absolute;
  display: inline-block;
  top: 104px;
  li {
    list-style: none;
    color: #666666;
    background-color: ${colors.white};
    margin-bottom: 0px;
    padding: 0 16px;
  }
`

class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };
  }

  render() {
    return(
      <StyledSuggestions>
        <li>dog</li>
        <li>dog</li>
        <li>dog</li>
        <li>dog</li>
      </StyledSuggestions>
    );
  }
}
  
export default Suggestions
