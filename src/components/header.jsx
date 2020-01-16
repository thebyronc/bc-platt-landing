import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors } from "../style-utilities/variables"

import Nav from "./navigation/nav"

const StyledHeader = styled.header`
  background: ${colors.primaryColor};
  width: 100%;
`
const StyledLogo = styled.div`

`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Nav></Nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
