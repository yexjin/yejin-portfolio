import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
font-family: Kanit-Medium;
font-style: normal;
font-weight: normal;
font-size: 26px;
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
