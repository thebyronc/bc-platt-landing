import React from "react"
import styled from "styled-components"
import { colors, breakpoints } from "../style-utilities/variables"

import Circle from "./Circle"
import IconCat from "../images/ic/green/ic_line_style.png"
import IconSearch from "../images/ic/green/ic_search.png"
import IconScanner from "../images/ic/green/ic_scanner.png"

const StyledCircles = styled.div` 
  background-color: ${colors.background};
  width: 100vw;
  margin: 0px -16px;
  padding: 32px 32px;
  display: flex;
  justify-content: space-between;
  img {
    margin-bottom: 0px;
  }
`

const Circles = () => (
  <StyledCircles>
    <Circle 
      text={'Categories'}
      icon={IconCat}>
    </Circle>
    <Circle 
      text={'Search'}
      icon={IconSearch}>
    </Circle>
    <Circle 
      text={'Scan'}
      icon={IconScanner}>
    </Circle>
  </StyledCircles>
)

export default Circles
