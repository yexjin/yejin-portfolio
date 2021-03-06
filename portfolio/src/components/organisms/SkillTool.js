import React from 'react'
import Title from '../atoms/SkillTitle'
import Tool from '../molecules/SkillTool'
import styled from 'styled-components'

const Flex = styled.div`
display: flex;
justify-content: space-evenly;
`

function SkillTool() {
    return (
        <Flex data-aos="fade-up"  data-aos-duration="1000">
        <Title children="Tools"/>
        <Tool />
        </Flex>
    )
}

export default SkillTool
