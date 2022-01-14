import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
width: 87px;
height: 33px;
margin-bottom: 19px;

font-family: Kanit-SemiBold;
font-style: normal;
font-size: 28px;
line-height: 33px;

color: #000000;
`

function ArchivingTitle({children}) {
    return (
        <Title>{children}</Title>
    )
}

export default ArchivingTitle
