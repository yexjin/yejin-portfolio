import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
width: 190px;
height: 30px;
padding-top: 11px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 21px;
line-height: 25px;

color: #FFFFFF;
background-color: #FF9898;
text-align: center;
margin-top: 37px;
`

function BannerButton() {
    return (
        <Button>
            자세히 알아보기
        </Button>
    )
}

export default BannerButton
