import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors } from "../style-utilities/variables"

import Nav from "./navigation/nav"
import Search from "./Search"

const StyledHeader = styled.header`
  background: ${colors.primaryColor};
  width: 100%;
`


const Header = () => (
  <StyledHeader>
    <Nav></Nav>
    <Search></Search>
  </StyledHeader>
)

export default Header
