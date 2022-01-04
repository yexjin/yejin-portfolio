import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
width: 543px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;

color: #000000;
`

function ArchivingText({children}) {
    return (
        <Text>
            {children}
        </Text>
    )
}

export default ArchivingText
