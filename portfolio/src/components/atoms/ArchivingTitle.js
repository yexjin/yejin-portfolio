import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
width: 87px;
margin-bottom: 19px;

font-family: Kanit-SemiBold;
font-style: normal;
font-size: 28px;
line-height: 33px;

color: #000000;
@media screen and (max-width: 1279px) {
    width: 72px;
    font-size: 23px;
    margin-bottom: 0px;
  }
@media screen and (max-width: 767px) {
    width: 44px;
    font-size: 14px;
    margin-bottom: 0px;
}
`

function ArchivingTitle({children}) {
    return (
        <Title>{children}</Title>
    )
}

export default ArchivingTitle
