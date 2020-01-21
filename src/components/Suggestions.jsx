import React, { Component } from "react"
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
      filteredSuggestions: [],
    };
  }

  render() {
    
    return(
      <StyledSuggestions>
        {this.props.children}
      </StyledSuggestions>
    );
  }
}
  
export default Suggestions
