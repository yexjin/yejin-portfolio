import React from 'react'
import styled from 'styled-components'
import Title from '../molecules/TemplateHeader'
import Inform from '../organisms/AboutMeInform'
import MyImg from '../atoms/MyImg'
import Text from '../atoms/AboutMeText'

const Box = styled.div`
width: 100%;
height: 889px;
padding-top: 30px;

background: #F4F4F4;
`
const Info = styled.div`
display: flex;
justify-content: space-between;
margin-left: 190px;
margin-right: 300px;
margin-top: 60px;
`
const Bar = styled.div`
width: 205px;
height: 6px;

background: #FBA2A2;
margin-top: 89px;
margin: 0 auto;
margin-bottom: 77px;
`

function AboutMe() {
    return (
        <Box>
            <Title children='About Me'/>
            <Info>
                <MyImg />
                <Inform />
            </Info>
            <Bar />
            <Text />
        </Box>
    )
}

export default AboutMe
