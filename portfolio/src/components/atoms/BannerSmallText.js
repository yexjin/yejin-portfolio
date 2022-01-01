import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
width: 526px;
height: 85px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 21px;
line-height: 30px;

color: #000000;
`

function BannerSmallText() {
    return (
        <Text>
            안녕하세요, <br />
            항상 멋진 사람이 되는 것을 꿈꾸는 프론트엔드 개발자입니다. <br />
            실패를 주저하지 않고 도전하는 것을 좋아해요 :)
        </Text>
    )
}

export default BannerSmallText
