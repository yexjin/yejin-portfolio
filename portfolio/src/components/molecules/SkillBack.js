import React from 'react'
import styled from 'styled-components'
import { Progress } from 'reactstrap'
import { Skills } from '../../data'


const Flex = styled.div`
display: flex;
`

const Name = styled.div`
margin-left: 94px;
margin-top: 5px;
font-family: Kanit-Regular;
font-style: normal;
font-size: 20px;
line-height: 29px;
`

const Percent = styled.div`
margin-left: 20px;
margin-top: 5px;
font-family: Kanit-Regular;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 29px;
`

const ProgressBox = styled.div`
width: 554px;;
margin-left: 37px;
margin-top: 10px;
margin-bottom: 18px;
`

const { back } = Skills();

function SkillBack() {
    return (
        <Flex> <div> 
        {back.map(skill=>{
            return(<Name>
                {skill.name}
                </Name>)
        })}</div>
        <div>
            {back.map(skill=>{
                return(<ProgressBox>
                    <Progress
                        animated
                        color="dark"
                        striped
                        value={skill.progress}
                    />
                </ProgressBox>)
            })}
        </div>
        <div>
            <div>
                {back.map(skill=>{
                    return(<Percent>
                        {skill.progress}%
                    </Percent>)
                })}
            </div>
        </div>
        </Flex>
    )
}

export default SkillBack
