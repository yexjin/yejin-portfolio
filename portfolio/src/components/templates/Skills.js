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
margin-top: 10px;
margin-right: 20px;
margin-left: 20px;
display: flex;
justify-content: space-evenly;
`


function Skills() {
    return (
        <Box>
            <Title children='Skills' />
            <Boxes>
                <Front />
                <Back />
                <div>
                <Tool /> <br />
                <Commu />
                </div>
            </Boxes>
        </Box>
    )
}

export default Skills
