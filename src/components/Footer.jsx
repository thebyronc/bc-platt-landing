import React from "react"
import styled from "styled-components"
import { colors, breakpoints } from "../style-utilities/variables"

import IconChat from "../images/ic/black/ic_comment.png"


const StyledFooter = styled.footer`
  background: ${colors.footerBackground};
  height: 360px;
  width: 100%;
  color: ${colors.altText};
  text-align: center;
  padding: 32px;
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0px;
  }
`

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .9rem;
  background-color: ${colors.background};
  color: ${colors.text};
  border: none;
  border-radius: 32px;
  margin: 32px auto;
  padding: 8px 64px;
  img {
    margin-right: 8px;
    display: block;
  }
  p {
    display: block;
    margin-bottom: 0px;
  }
`

const StyledBottomNav = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  max-width: ${breakpoints.ultraWideDesktop};
  p {
    font-weight: 700;
  }
`

const Footer = () => (
  <StyledFooter>
    <h4>Support Center</h4>
    <br/>
    <h4>800-25-Platt</h4>
    <p>800-257-5288</p>
    <h4>4 a.m. - 12 a.m. (pst)</h4>
    <h4>7 Days a week</h4>
    <StyledButton>
      <img src={IconChat} alt="" />
      <p>
        Live Help
      </p>
    </StyledButton>
    <StyledBottomNav>
      <p>Contact Us</p>
      <p>What's New</p>
      <p>FAQ's</p>
    </StyledBottomNav>
  </StyledFooter>
)

export default Footer
