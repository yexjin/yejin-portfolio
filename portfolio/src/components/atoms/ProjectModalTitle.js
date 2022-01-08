import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
font-family: Noto-Medium;
font-style: normal;
font-weight: normal;
font-size: 23px;
line-height: 15px;
padding-top: 40px;

color: #000000;
`

function ProjectModalTitle({text}) {
    return (
        <>
        <Text>{text}</Text>
        </>
    )
}

export default ProjectModalTitle
