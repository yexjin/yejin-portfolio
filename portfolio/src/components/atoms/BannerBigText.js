import React from 'react'
import styled from 'styled-components'
import { Typing } from 'typing-effect-reactjs';
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();

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

const types = ['프론트엔드 개발자', '더 많이 공부하고 싶은 개발자', '열정적인 개발자']

function BannerBigText() {
    return (
        <Text data-aos="fade-right"  data-aos-duration="500">
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

export default BannerBigText
