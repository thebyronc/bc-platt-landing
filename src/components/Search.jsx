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
      suggestions: [],
      dummy: [],
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };
  }

  componentDidMount() {
    let dogApi = [
      'Aussie',
      'Border Collie',
      'Golden',
      'Husky',
    ];
    let fetchedApi = [];

    fetch('https://dog.ceo/api/breeds/list/all')
      .then(results => {
        return results.json();
      }).then(data => {
        let dogList = data.message;
        let dogApiFetched = [];

        for(var i in data.message) {
          dogApiFetched.push([i, data.message [i]][0]);
        }
    
        this.setState({
          suggestions: dogApiFetched
        });
      });
  }

  onChange = e => {
    const suggestions = this.state.suggestions;
    const userInput = e.currentTarget.value;
    
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  }

  render() {
    let SuggestionsComponent;
    if(this.state.showSuggestions && this.state.userInput) {
      if (this.state.filteredSuggestions.length) {
        SuggestionsComponent = (
          <Suggestions>
            {this.state.filteredSuggestions.map((suggestion, index) => {
              return ( <li>{suggestion}</li> )
            })}
          </Suggestions>
        )
      }
    }

    return(
      <StyledSearch>
        <StyledForm>
          
          <StyledInput 
            placeholder="What are you looking for? (Search For Dog Breeds)"
            onChange={this.onChange}
          >          
          </StyledInput>
          
          <StyledIcon>
            <img src={IconSearch} alt="Search" />
          </StyledIcon>
          {SuggestionsComponent}
        </StyledForm>
      </StyledSearch>
    );
  }
}
  
export default Search
