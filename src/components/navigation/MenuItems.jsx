import React from "react"
import styled from "styled-components"

const StyledMenuItems = styled.div` 
  /* background: green; */
  width: 20px;
  height: 20px;
  margin: 8px 0px 8px 16px;
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
