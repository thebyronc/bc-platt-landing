import React from "react"
import styled from "styled-components"
import { colors } from "../../style-utilities/variables"

const StyledGridItem = styled.div` 
  background-color: ${colors.white};
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px 0px;
  
  img {
    margin-bottom: 16px;
  }
  p {
    font-size: .9rem;
    display: block;
    margin-bottom: 0px;
    font-weight: 700;
  }
`

const GridItem = ({className, children}) => (
  <StyledGridItem className={className}>
    {children}
  </StyledGridItem>
)

export default GridItem
