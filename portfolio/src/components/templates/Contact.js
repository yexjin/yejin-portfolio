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
width: 154px;
height: 38px;
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

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;

color: #737373;
margin: 0 auto;
margin-top: 50px;
`

function Contact() {
    return (
        <Box>
            <TitleBox src={Title} alt="ContactMe"/>
            <ContactBox />
            <Bar />
            <Footer>OYEJIN © 2022PORTFOLIO</Footer>
        </Box>
    )
}

export default Contact
