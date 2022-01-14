import React from 'react'
import styled from 'styled-components'
import Title from '../molecules/TemplateHeader'
import Slide from '../organisms/ProjectsSlide'

const Box = styled.div`
width: 100%;
height: 906px;

background: #FFFFFF;
padding-top: 40px;
`
const SubText = styled.div`
font-size: 17px;
font-weight: 700;
color: #666363;
font-family: Noto-Regular;
font-style: normal;
float: right;
padding-top: 90px;
margin-right: 300px;
`

function Projects() {
    return (
        <Box data-aos="fade-up"  data-aos-duration="3000">
           <Title children='Projects'/> 
           <SubText>⚠ 작품을 클릭해보세요!</SubText>
           <Slide />
        </Box>
    )
}

export default Projects
