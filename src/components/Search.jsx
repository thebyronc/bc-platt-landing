import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors, breakpoints } from "../style-utilities/variables"

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
`

const StyledIcon = styled.div`
  width: 42px;
  background-color: ${colors.white};
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 18px;
    width: 18px;
    margin-bottom: 0px; 
  }
`

const Search = () => (
  <StyledSearch>
    <StyledForm>
      <StyledInput></StyledInput>
      <StyledIcon>
        <img src={IconSearch} />
      </StyledIcon>
    </StyledForm>
  </StyledSearch>
)

export default Search
