import { Link } from "gatsby"
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
  justify-content: space-between;
`
const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
  img {
    margin-bottom: 0px;
  }
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
