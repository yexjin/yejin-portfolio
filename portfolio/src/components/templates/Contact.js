import React from 'react'
import styled from 'styled-components'
import Title from '../molecules/TemplateHeader';

const Box = styled.div`
width: 100%;
height: 906px;

background: #F4F4F4;
padding-top: 79px;
`


function Contact() {
    return (
        <Box>
            <Title children='Contact' />
        </Box>
    )
}

export default Contact
