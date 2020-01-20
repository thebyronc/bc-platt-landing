import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colors, breakpoints } from "../style-utilities/variables"

import Suggestions from "./Suggestions"
import IconSearch from "../images/ic/black/ic_search.png"

const StyledSearch = styled.div` 
  max-width: ${breakpoints.ultraWideDesktop};
  margin: 0px auto;
  padding: 0px 16px 16px 16px;
`

const StyledForm = styled.form`
  margin-bottom: 0px;
  display: flex;
`

const StyledInput = styled.input`
  height: 42px;
  display: flex;
  flex: 1 1 0%;
  border: none;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 0 16px;
`

const StyledIcon = styled.div`
  width: 42px;
  background-color: ${colors.white};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 18px;
    width: 18px;
    margin-bottom: 0px; 
  }
`

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };
  }

  componentDidMount() {
    let filtered = [
      'Aussie',
      'Border Collie',
      'Golden',
      'Husky',
    ];
    
    this.setState({
      filteredSuggestions: {}
    });
  }

  onChange = e => {
    this.setState({
      userInput: e.currentTarget.value
    });
  }

  render() {
    return(
      <StyledSearch>
        <StyledForm>
          
          <StyledInput 
            placeholder="What are you looking for?"
            onChange={this.onChange}
            // onKeyDown={this.onKeyDown}
            // value={this.onChange}
          >          
          </StyledInput>
          
          <StyledIcon>
            <img src={IconSearch} alt="Search" />
          </StyledIcon>
          <Suggestions></Suggestions>
        </StyledForm>
      </StyledSearch>
    );
  }
}
  
export default Search
