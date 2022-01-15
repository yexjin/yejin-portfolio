import React from 'react'
import styled from 'styled-components'
import { Skills } from '../../data'

const Names = styled.div`
width: 600px;
margin-left: 30px;
display: flex;
@media screen and (max-width: 1279px) {
    width: 500px;
    margin-left: 0px;
  }
@media screen and (max-width: 767px) {
    margin-left: 3px;
    font-size: 13px;
    width: 300px;
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
    margin-left: 25px;
    font-size: 20px;
    margin-right: 0px;
    margin-top: 0px;
  }
@media screen and (max-width: 767px) {
    margin-left: 10px;
    font-size: 13px;
    line-height: 0px;
    margin-top: 0px;
}
`

const { communication } = Skills();

function SkillCommu() {
    return (
        <Names>
        {communication.map(skill=>{
            return (<Name>{skill.name}</Name>)
        })}
        </Names>
    )
}

export default SkillCommu
