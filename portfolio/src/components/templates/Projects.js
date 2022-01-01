import React from 'react'
import styled from 'styled-components'
import Title from '../molecules/TemplateHeader'

const Box = styled.div`
width: 100%;
height: 906px;

background: #FFFFFF;
padding-top: 79px;
`

function Projects() {
    return (
        <Box>
           <Title children='Projects' /> 
        </Box>
    )
}

export default Projects
