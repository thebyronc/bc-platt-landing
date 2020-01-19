import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colors, breakpoints } from "../../style-utilities/variables"

const StyledGridItem = styled.div` 
  background-color: ${colors.white};
  /* margin: 16px; */
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* width: 170px; */
  height: 180px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px 0px;
  
  img {
    margin-bottom: 16px;
  }
  p {
    font-size: .8rem;
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
