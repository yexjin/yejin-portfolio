import React from 'react'
import styled from 'styled-components'
import Title from '../molecules/TemplateHeader';

const Box = styled.div`
width: 100%;
height: 906px;

background: #FFFFFF;
`


function Contact() {
    return (
        <Box>
            <Title children='Contact' />
        </Box>
    )
}

export default Contact
