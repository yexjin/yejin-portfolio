import React from 'react'
import styled from 'styled-components'
import Title from '../molecules/TemplateHeader';

const Box = styled.div`
width: 100%;
height: 835px;
padding-top: 79px;

background: #F4F4F4;
`

function AboutMe() {
    return (
        <Box>
            <Title children='About Me'/>
        </Box>
    )
}

export default AboutMe
