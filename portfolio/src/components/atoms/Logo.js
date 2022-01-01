import React from 'react'
import styled from 'styled-components'

const LogoText = styled.div`
width: 211px;
height: 28px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
margin-left: 37px;
margin-top: 25px;
`

function Logo() {
    return (
        <LogoText>
            O YE JIN’s Portfolio
        </LogoText>
    )
}

export default Logo
