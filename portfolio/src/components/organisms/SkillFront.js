import React from 'react'
import Title from '../atoms/SkillTitle'
import Front from '../molecules/SkillFront'
import styled from 'styled-components'

const Flex = styled.div`
display: flex;
`

function SkillFront() {
    return (
        <Flex>
            <Title children="Front-end"/>
            <div>
                <Front />
            </div>
        </Flex>
    )
}

export default SkillFront