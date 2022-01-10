import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
width: 691px;
height: 85px;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 30px;
text-align: center;

color: #000000;
margin: 0 auto;
`

function AboutMeText() {
    return (
        <Box data-aos="fade-up"  data-aos-duration="3000">
            기획부터 개발까지 경험해봤으며, <br />
            프론트엔드 개발 분야로 발을 넓히고 있는 중입니다 :) <br />
            계속해서 도전해 나갈것이고 이 포트폴리오는 계속해서 업데이트 될 예정입니다 !
        </Box>
    )
}

export default AboutMeText
