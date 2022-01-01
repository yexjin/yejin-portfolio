import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
width: 438px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 37px;
line-height: 60px;

color: #000000;
margin-bottom: 173px;
`

function BannerBigText() {
    return (
        <Text>
            프론트 엔드 개발자 <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp; “오예진” 입니다 -
        </Text>
    )
}

export default BannerBigText
