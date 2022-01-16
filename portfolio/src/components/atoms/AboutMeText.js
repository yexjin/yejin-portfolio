import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from "react-responsive";


const Box = styled.div`
width: 691px;
height: 85px;
font-family: Kanit-Medium;
font-style: normal;
font-size: 18px;
line-height: 30px;
text-align: center;

color: #000000;
margin: 0 auto;
@media screen and (max-width: 1279px) {
    width: 500px;
    height: 70px;
    font-size: 15px;
    line-height: 23px;
  }
@media screen and (max-width: 767px) {
    width: 360px;
    height: 50px;
    font-size: 12px;
    line-height: 20px;
}
`

function AboutMeText() { 
    const isMobile = useMediaQuery({ query: " (max-width: 767px)" });

    return( 
        <>
        {(!isMobile) && (
            <Box data-aos="fade-up"  data-aos-duration="3000">
                기획부터 개발까지 경험해봤으며, <br />
                프론트엔드 개발 분야로 발을 넓히고 있는 중입니다 :) <br />
                계속해서 공부해 나갈것이고 이 포트폴리오는 계속해서 업데이트 될 예정입니다 !
            </Box>
        )}
        {isMobile && (
            <Box data-aos="fade-up"  data-aos-duration="3000">
            기획부터 개발까지 경험해봤으며, <br />
            프론트엔드 개발 분야로 발을 넓히고 있는 중입니다 :) <br />
            계속해서 공부해 나갈것이고 <br />
            이 포트폴리오는 계속해서 업데이트 될 예정입니다 !
            </Box>   
        )}
        </>
        )
}

export default AboutMeText
