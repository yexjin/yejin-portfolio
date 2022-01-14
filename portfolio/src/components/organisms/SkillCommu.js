import React from 'react'
import Title from '../atoms/SkillTitle'
import Commu from '../molecules/SkillCommu'
import styled from 'styled-components'

const Flex = styled.div`
display: flex;
margin-top: 30px;
`

function SkillTool() {
    return (
        <Flex data-aos="fade-up"  data-aos-duration="1000">
        <Title children="Communication"/>
        <Commu />
        </Flex>
    )
}

export default SkillTool
