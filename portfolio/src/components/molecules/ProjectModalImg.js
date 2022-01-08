import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
width: 440px;
height: auto;
`

function ProjectModalImg({detail}) {
    return (
        <Img src={detail} alt="projectImg"/>
    )
}

export default ProjectModalImg
