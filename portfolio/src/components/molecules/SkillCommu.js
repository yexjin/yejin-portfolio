import React from 'react'
import styled from 'styled-components'
import { Skills } from '../../data'

const Names = styled.div`
width: 600px;
margin-left: 30px;
display: flex;
`

const Name = styled.div`
margin-top: 5px;
font-family: Roboto;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 29px;
margin-right: 40px;
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
