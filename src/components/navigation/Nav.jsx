import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { breakpoints } from "../../style-utilities/variables"

import PlattLogo from "../../images/img/logo.png"
import Menu from "./Menu"

const StyledNav = styled.nav` 
  /* background: green; */
  display: flex;
  max-width: ${breakpoints.ultraWideDesktop};
  margin: 0 auto;
  padding: 16px;
`
const StyledLogo = styled.div`
  max-width: 300px;
  margin-bottom: 0px;
`

const Nav = ({ siteTitle }) => (
  <StyledNav>
    <StyledLogo>
      <Link to="/">
        <img src={PlattLogo} /> 
      </Link>
    </StyledLogo>
    <Menu></Menu>
  </StyledNav>
)

export default Nav
