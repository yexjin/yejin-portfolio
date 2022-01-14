import React from 'react'
import styled from 'styled-components'
import Title from '../molecules/TemplateHeader'
import Inform from '../organisms/AboutMeInform'
import MyImg from '../atoms/MyImg'
import Text from '../atoms/AboutMeText'
import Activity from '../molecules/MyActivity'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();

const Box = styled.div`
width: 100%;
height: 889px;
padding-top: 25px;

background: #F4F4F4;
`
const Info = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 40px;
margin-bottom: 50px;
`
const Bar = styled.div`
width: 205px;
height: 6px;

background: #FBA2A2;
margin: 0 auto;
margin-bottom: 30px;
`

function AboutMe() {
    return (
        <Box>
            <Title children='About Me'/>
            <Info >
                <MyImg />
                <Inform />
                <Activity />
            </Info>
            <Bar data-aos="fade-up"  data-aos-duration="1000"/>
            <Text />
        </Box>
    )
}

export default AboutMe
