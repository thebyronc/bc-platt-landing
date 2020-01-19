import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colors, breakpoints } from "../../style-utilities/variables"

import GridItem from "./GridItem"


const StyledGridGridRecentlyViewed = styled(GridItem)` 

`

const GridRecentlyViewed = ({className, children}) => (
  <StyledGridGridRecentlyViewed className={className}>
    {children}
    <p>Recently Viewed</p>
  </StyledGridGridRecentlyViewed>
)

export default GridRecentlyViewed
