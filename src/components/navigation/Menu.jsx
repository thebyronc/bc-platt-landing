import React from "react"
import styled from "styled-components"

import MenuItem from "./MenuItems"

import IconSearch from "../../images/ic/white/ic_Search.png"
import IconShoppinCart from "../../images/ic/white/ic_shopping_cart.png"
import IconPerson from "../../images/ic/white/ic_person.png"
import IconMenu from "../../images/ic/white/ic_menu.png"

const StyledMenu = styled.div` 
  /* background: green; */
  display: flex;
  justify-content: space-between;
  max-width: 200px;
  margin: 0;
`

const Menu = () => (
  <StyledMenu>
    <MenuItem Item={IconSearch}></MenuItem>
    <MenuItem Item={IconShoppinCart}></MenuItem>
    <MenuItem Item={IconPerson}></MenuItem>
    <MenuItem Item={IconMenu}></MenuItem>
  </StyledMenu>
)

export default Menu
