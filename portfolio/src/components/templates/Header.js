import React from 'react'
import styled from 'styled-components'
import Logo from '../atoms/Logo'
import Buttons from '../organisms/HeaderButtons'

const Box = styled.div`
position: fixed;
display: flex;
justify-content: space-between;
width: 100%;
height: 79px;
background-color: #F1F0F0;
`

function Header() {
    return (
        <Box>
            <Logo />
            <Buttons />   
        </Box>
    )
}

export default Header
