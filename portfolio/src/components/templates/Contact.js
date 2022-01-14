import React from 'react'
import styled from 'styled-components'
import Title from '../../image/ContactMe.png'
import ContactBox from '../organisms/ContectBox'

const Box = styled.div`
width: 100%;
height: 700px;

background: #F4F4F4;
padding-top: 130px;
padding: 0 auto;
`


const TitleBox = styled.img`
width: 170px;
height: 50px;
margin-left: 44%;
`

const Bar = styled.div`
width: 818.01px;
height: 0px;
margin: 0 auto;
margin-top: 40px;
border: 1px solid #8B8888;
`

const Footer = styled.div`
width: 245px;
height: 23px;

font-family: Kanit-Regular;
font-style: normal;
font-size: 20px;
line-height: 23px;

color: #737373;
margin: 0 auto;
margin-top: 50px;
`

function Contact() {
    return (
        <Box data-aos="fade-up"  data-aos-duration="3000">
            <TitleBox src={Title} alt="ContactMe"/>
            <ContactBox />
            <Bar />
            <Footer>OYEJIN © 2022PORTFOLIO</Footer>
        </Box>
    )
}

export default Contact
