import React from 'react'
import styled from 'styled-components'
import Phone from '../molecules/ContactPhone'
import Mail from '../molecules/ContactMail'
import Insta from '../molecules/ContactInsta'

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
