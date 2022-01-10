import React from 'react'
import styled from 'styled-components'
import Phone from '../molecules/ContactPhone'
import Insta from '../molecules/ContactInsta'
import Mail from '../molecules/ContactMail'

const Box = styled.div`
width: 404px;
height: 183px;
margin: 0 auto;
margin-top: 49px;

`

function ContectBox() {
    return (
        <Box>
            <Phone />
            <Mail />
            <Insta />
        </Box>
    )
}

export default ContectBox
