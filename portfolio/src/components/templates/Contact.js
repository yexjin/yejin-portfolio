import React, { useEffect, useState }  from 'react'
import styled from 'styled-components'
import Title from '../../image/ContactMe.png'
import ContactBox from '../organisms/ContectBox'
import CTLoading from '../organisms/CTLoading'

const Box = styled.div`
width: 100%;
height: 700px;

background: #F4F4F4;
padding-top: 170px;
padding: 0 auto;
@media screen and (max-width: 1279px) {
    height: 320px;
    padding-top: 50px;
}
@media screen and (max-width: 767px) {
    height: 250px;
    padding-top: 35px;
}
`


const TitleBox = styled.div`
width: 170px;
height: 50px;
margin: 0 auto;
img{
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 1279px) {
  width: 128px;
  height: 35px;
  margin-bottom: 26px;
}
@media screen and (max-width: 767px) {
  width: 90px;
  height: 25px;
  margin-bottom: 15px;
}
`

const Bar = styled.div`
width: 818.01px;
height: 0px;
margin: 0 auto;
margin-top: 40px;
border: 1px solid #8B8888;
@media screen and (max-width: 1279px) {
  width: 400px;
  margin-top: 14px;
}
@media screen and (max-width: 767px) {
  width: 250px;
  margin-top: 14px;
}
`

const Footer = styled.div`
text-align: center;
width: 245px;
height: 23px;

font-family: Kanit-Regular;
font-style: normal;
font-size: 20px;
line-height: 23px;

color: #737373;
margin: 0 auto;
margin-top: 50px;
@media screen and (max-width: 1279px) {
width: 200px;
height:20px;
font-size: 15px;
line-height: 10px;
margin-top: 20px;
text-align: center;
}
@media screen and (max-width: 767px) {
  width: 125px;
  font-size: 10px;
  margin-top: 14px;
}
`

function Contact() {
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
      setLoading(false);
    }, []);
    
    return loading ? (
      <CTLoading />
    ) : (
        <Box>
            <TitleBox>
              <img src={Title} alt="ContactMe" />
            </TitleBox>
            <ContactBox />
            <Bar />
            <Footer>OYEJIN © 2022PORTFOLIO</Footer>
        </Box>
    )
}

export default Contact
