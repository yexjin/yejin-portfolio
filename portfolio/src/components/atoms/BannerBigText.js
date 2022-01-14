import React from 'react'
import styled from 'styled-components'
import { Typing } from 'typing-effect-reactjs';

const Text = styled.div`
width: 450px;
font-family: Kanit-Bold;
font-style: normal;
font-size: 37px;
line-height: 60px;
color: #000000;
margin-bottom: 173px;

@media screen and (max-width: 1279px) {
    font-size: 29px;
    width: 320px;
    margin-bottom: 100px;
  }
@media screen and (max-width: 767px) {
font-size: 25px;
width: 350px;
margin-bottom: 50px;
}
`

const types = ['프론트엔드 개발자', '더 많이 공부하고 싶은 개발자', '열정적인 개발자']

function BannerBigText() {
    return (
        <Text>
            <Typing 
                text={types}
                typeSpeed={100}
                deleteSpeed={50}
                disableBlinkingOnEnd={10}
                blinkingSpeed={1000}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp; “오예진” 입니다 - !
        </Text>
    )
}

export default React.memo(BannerBigText)
