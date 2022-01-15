import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
width: 440px;
height: auto;
@media screen and (max-width: 1279px) {
    width: 247px;
}
@media screen and (max-width: 767px) {
    width: 243px;
    height: auto;
}
`

function ProjectModalImg({detail}) {
    return (
        <Img src={detail} alt="projectImg"/>
    )
}

export default ProjectModalImg
