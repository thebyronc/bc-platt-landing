import React from "react"
import styled from "styled-components"
import { colors, breakpoints } from "../style-utilities/variables"

const StyledGrids = styled.div` 
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

const Grids = () => (
  <StyledGrids>

  </StyledGrids>
)

export default Grids
