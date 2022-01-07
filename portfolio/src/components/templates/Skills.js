import React from 'react'
import styled from 'styled-components'
import Title from '../molecules/TemplateHeader'
import Front from '../organisms/SkillFront'
import Back from '../organisms/SkillBack'
import Tool from '../organisms/SkillTool'
import Commu from '../organisms/SkillCommu'

const Box = styled.div`
width: 100%;
height: 906px;

background: #F4F4F4;
padding-top: 20px;
`

const Boxes = styled.div`
width: 1035px;
padding-top: 35px;
margin: 0 auto;
`

const Bar = styled.div`
margin-left: -30px;
border: 1px solid #8B8888;
margin-top: 50px;
margin-bottom: 45px;
`


function Skills() {
    return (
        <Box>
            <Title children='Skills' />
            <Boxes>
                <Front />
                <Back />
                <Bar />
                <Tool /> 
                <Commu />
            </Boxes>
        </Box>
    )
}

export default Skills
