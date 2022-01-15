import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
width: 543px;

font-family: Noto-Regular;
font-style: normal;
font-size: 20px;
line-height: 23px;

color: #000000;
@media screen and (max-width: 1279px) {
    width: 410px;
    font-size: 15px;
  }
@media screen and (max-width: 767px) {
    width: 200px;
    font-size: 10px;
    line-height: 12px;
}
`

function ArchivingText({children}) {
    return (
        <Text>
            {children}
        </Text>
    )
}

export default ArchivingText
