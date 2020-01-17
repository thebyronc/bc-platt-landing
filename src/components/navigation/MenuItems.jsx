import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors, breakpoints } from "../../style-utilities/variables"

const StyledMenuItems = styled.div` 
  /* background: green; */
  width: 20px;
  height: 20px;
  margin: 8px;
  img {
    margin-bottom: 0px;
  }
`

const MenuItems = ({ Item }) => (
  <StyledMenuItems>
    <img src={Item} alt="nav" />
  </StyledMenuItems>
)

export default MenuItems
