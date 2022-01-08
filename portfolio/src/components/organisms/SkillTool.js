import React from 'react'
import Title from '../atoms/SkillTitle'
import Tool from '../molecules/SkillTool'
import styled from 'styled-components'

const Flex = styled.div`
display: flex;
`

function SkillTool() {
    return (
        <Flex>
        <Title children="Tools"/>
        <Tool />
        </Flex>
    )
}

export default SkillTool
