import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const LogoText = styled.div`
cursor: pointer;
width: 211px;
height: 28px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
margin-left: 37px;
margin-top: 25px;
text-decoration: none;
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
