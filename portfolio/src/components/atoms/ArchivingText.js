import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
width: 543px;

font-family: Noto-Regular;
font-style: normal;
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
