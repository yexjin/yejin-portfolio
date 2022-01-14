import React from 'react'
import styled from 'styled-components'
import Title from '../molecules/TemplateHeader'
import Inform from '../organisms/AboutMeInform'
import MyImg from '../atoms/MyImg'
import Text from '../atoms/AboutMeText'
import Activity from '../molecules/MyActivity'
import { useMediaQuery } from "react-responsive";


const Box = styled.div`
width: 100%;
height: 889px;
padding-top: 25px;

background: #F4F4F4;
@media screen and (max-width: 1279px) {
    height: 1000px;
  }
@media screen and (max-width: 767px) {
    height: 1000px;
}
`
const Info = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 40px;
margin-bottom: 10px;
@media screen and (max-width: 1279px) {

  }
@media screen and (max-width: 767px) {
}
`
const Bar = styled.div`
width: 205px;
height: 6px;

background: #FBA2A2;
margin: 0 auto;
margin-top: 20px;
margin-bottom: 30px;
@media screen and (max-width: 1279px) {
    width: 205px;
    height: 4px;
  }
@media screen and (max-width: 767px) {
    width: 205px;
    height: 3px;
}
`

function AboutMe() {

    const isPc = useMediaQuery({
        query: "(min-width: 1280px)",
      });
    const isTablet = useMediaQuery({
        query: "(min-width: 768px) and (max-width:1279px)",
      });
    const isMobile = useMediaQuery({ query: " (max-width: 767px)" });

    return (
        <Box>
            {isPc && (
                    <>
                    <Title children='About Me'/>
                    <Info >
                        <MyImg />
                        <Inform />
                        <Activity />
                    </Info>
                    <Bar data-aos="fade-up"  data-aos-duration="1000"/>
                    <Text />
                    </>
            )}
            {isTablet && (
                    <>
                    <Title children='About Me'/>
                    <Info >
                        <MyImg />
                        <Inform />
                    </Info>
                    <Info>
                        <Activity />
                    </Info>
                    <Bar data-aos="fade-up"  data-aos-duration="1000"/>
                    <Text />
                    </>
            )}
            {isMobile && (
                <>
                    <Title children='About Me'/>
                    <Info >
                        <MyImg />
                        </Info>
                        <Info >
                        <Inform />
                        </Info>
                        <Info >
                        <Activity />
                    </Info>
                    <Bar data-aos="fade-up"  data-aos-duration="1000"/>
                    <Text />
                </>
            )}
        </Box>
    )
}

export default AboutMe
