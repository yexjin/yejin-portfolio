import React from 'react'
import styled from 'styled-components'
import Phone from '../molecules/ContactPhone'
import Insta from '../molecules/ContactInsta'
import Mail from '../molecules/ContactMail'

const Box = styled.div`
width: 404px;
margin: 0 auto;
margin-top: 49px;
@media screen and (max-width: 1279px) {
width: 300px;
margin-top: 0px;
}
@media screen and (max-width: 767px) {
    width: 200px;
}

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
