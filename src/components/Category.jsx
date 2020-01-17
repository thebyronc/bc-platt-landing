import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors, breakpoints, boundingbox } from "../style-utilities/variables"

import IconArrow from "../images/ic/black/ic_arrow_forward.png"

const StyledCategory = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  border-bottom: 1px solid #cccccc;
  padding: 20px 16px;;
`
const StyledLabel = styled.div`
  flex: 1 1 0%;
`

const StyledIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Category = ({name}) => (
  <StyledCategory>
    <StyledLabel>
      {name}
    </StyledLabel>
    <StyledIcon>
      <img src={IconArrow} />
    </StyledIcon>
  </StyledCategory>
)

export default Category
