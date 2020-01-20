import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors, breakpoints } from "../style-utilities/variables"

import Category from "./Category"
import IconCategories from "../images/ic/black/ic_categories.png"
import IconListCheck from "../images/ic/black/ic_playlist_add_check.png"
import IconList from "../images/ic/black/ic_list.png"
import IconChat from "../images/ic/green/ic_chat_active.png"
import IconCircle from "../images/ic/black/ic_check_circle.png"
import IconPerson from "../images/ic/black/ic_person.png"
import IconPlace from "../images/ic/black/ic_place.png"

const StyledCategories = styled.div` 
  max-width: ${breakpoints.ultraWideDesktop};
  margin: auto -16px;
  background-color: ${colors.white};

  @media (min-width: ${breakpoints.mobile}) {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    grid-template-areas: 
      'category category category' 
      'item1A item1B item1C'
      'item2A item2B item2C'
    ;
  }
`

const StyledCategory = styled(Category)`
  @media (min-width: ${breakpoints.mobile}) {
    &:nth-child(1) {
      grid-area: category;
    }
    &:nth-child(2) {
      grid-area: item1A;
    }
    &:nth-child(3) {
      grid-area: item1B;
    }
    &:nth-child(4) {
      grid-area: item1C;
    }
    &:nth-child(5) {
      grid-area: item2A;
    }
    &:nth-child(6) {
      grid-area: item2B;
    }
    &:nth-child(7) {
      grid-area: item2C;
    }
  }
`

const Categories = () => (
  <StyledCategories>
    <StyledCategory 
      catIcon={IconCategories} 
      name={'Shop all categories'}>    
    </StyledCategory>
    <StyledCategory 
      catIcon={IconListCheck} 
      name={'My Catalog'}>
    </StyledCategory>
    <StyledCategory 
      catIcon={IconList} 
      name={'My List'}>
    </StyledCategory>
    <StyledCategory 
      catIcon={IconChat} 
      name={'Live Help'}>
    </StyledCategory>
    <StyledCategory 
      catIcon={IconCircle} 
      name={'PIM'}>
    </StyledCategory>
    <StyledCategory 
      catIcon={IconPerson} 
      name={'Account'}>
    </StyledCategory>
    <StyledCategory 
      catIcon={IconPlace} 
      name={'Branch Locations'}>
    </StyledCategory>
  </StyledCategories>
)

export default Categories
