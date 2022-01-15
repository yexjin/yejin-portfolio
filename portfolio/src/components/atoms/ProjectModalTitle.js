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
@media screen and (max-width: 1279px) {
    font-size: 20px;
    padding-top: 10px;
}
@media screen and (max-width: 767px) {
    font-size: 16px;
}
`

function ProjectModalTitle({text}) {
    return (
        <>
        <Text>{text}</Text>
        </>
    )
}

export default React.memo(ProjectModalTitle)
