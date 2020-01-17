import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors, breakpoints } from "../style-utilities/variables"

import Category from "./Category"
import IconSearch from "../images/ic/black/ic_search.png"

const StyledCategories = styled.div` 
  max-width: ${breakpoints.ultraWideDesktop};
  margin: auto -16px;
  
`

const Categories = () => (
  <StyledCategories>
    <Category name={'Shop all categories'}></Category>
    <Category name={'My Catalog'}></Category>
    <Category name={'My List'}></Category>
    <Category name={'Live Help'}></Category>
    <Category name={'PIM'}></Category>
    <Category name={'Account'}></Category>
    <Category name={'Branch Locations'}></Category>
  </StyledCategories>
)

export default Categories
