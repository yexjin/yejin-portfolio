import React from 'react'
import styled from 'styled-components'
import { Skills } from '../../data'

const Names = styled.div`
width: 600px;
margin-left: 140px;
display: flex;
@media screen and (max-width: 1279px) {
    width: 500px;
    margin-left: 68px;
  }
@media screen and (max-width: 767px) {
    margin-left: 10px;
    font-size: 13px;
    width: 300px;
    margin-top: 26px;
}
`

const Name = styled.div`
margin-top: 5px;
font-family: Kanit-Regular;
font-style: normal;
font-size: 20px;
line-height: 29px;
margin-right: 40px;
@media screen and (max-width: 1279px) {
    margin-left: 50px;
    font-size: 20px;
    margin-right: 20px;
    margin-top: 0px;
  }
@media screen and (max-width: 767px) {
    margin-left: 4px;
    font-size: 13px;
    line-height: 10px;
    margin-top: 4.3px;
}
`

const { tool } = Skills();

function SkillTool() {
    return (
        <Names>
        {tool.map(skill=>{
            return (<Name>{skill.name}</Name>)
        })}
        </Names>
    )
}

export default SkillTool
