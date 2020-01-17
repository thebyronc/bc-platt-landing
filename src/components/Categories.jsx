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
`

const Categories = () => (
  <StyledCategories>
    <Category 
      catIcon={IconCategories} 
      name={'Shop all categories'}>    
    </Category>
    <Category 
      catIcon={IconListCheck} 
      name={'My Catalog'}>
    </Category>
    <Category 
      catIcon={IconList} 
      name={'My List'}>
    </Category>
    <Category 
      catIcon={IconChat} 
      name={'Live Help'}>
    </Category>
    <Category 
      catIcon={IconCircle} 
      name={'PIM'}>
    </Category>
    <Category 
      catIcon={IconPerson} 
      name={'Account'}>
    </Category>
    <Category 
      catIcon={IconPlace} 
      name={'Branch Locations'}>
    </Category>
  </StyledCategories>
)

export default Categories
