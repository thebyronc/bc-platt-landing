import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { breakpoints } from "../style-utilities/variables"

import IconArrow from "../images/ic/black/ic_arrow_forward.png"

const StyledCategory = styled(Link)` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  border-bottom: 1px solid #cccccc;
  margin: 0px 8px;
  padding: 20px 8px;
  &:first-child {
    padding: 32px 8px;
    font-weight: 700;
  }
  &:last-child {
    border-bottom: none;
  }

  @media (min-width: ${breakpoints.mobile}) {
    border: 1px solid #cccccc;
    margin: 0px 0px;
    &:first-child {
 
      padding: 24px 8px;
    }
    &:last-child {
      border-bottom:  1px solid #cccccc;
    }
  }
`
const StyledLabel = styled.div`
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  p {
    margin-left: 8px;
    margin-bottom: 0px;
  }
  @media (min-width: ${breakpoints.mobile}) {
    justify-content: center;
  }
`

const StyledIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${breakpoints.mobile}) {
    &:nth-child(2) {
      display: none;
    }
  }
`

const Category = ({className, name, catIcon}) => (
  <StyledCategory to="/" className={className}>
    <StyledLabel>
      <StyledIcon>
        <img src={catIcon} />
      </StyledIcon>
      <p>
        {name}
      </p>
    </StyledLabel>
    <StyledIcon>
      <img src={IconArrow} />
    </StyledIcon>
  </StyledCategory>
)

export default Category
