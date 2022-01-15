import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const LogoText = styled.div`
cursor: pointer;
width: 400px;
height: 28px;
font-family: Kanit-Bold;
font-style: normal;
font-size: 24px;
line-height: 28px;
margin-left: 37px;
margin-top: 25px;
text-decoration: none;
@media screen and (max-width: 1279px) {
    font-size: 18px;
    line-height: 20px;
    margin-top: 32px;
  }
@media screen and (max-width: 767px) {
    font-size: 17px;
    margin-top: 30px;
}
`

function Logo() {
    return (
        <LogoText>
            <Link to='Banner' spy={true} smooth={true} style={{textDecoration: 'none', color: 'black'}}>
            O YE JIN’s Portfolio
            </Link>
        </LogoText>
    )
}

export default Logo
