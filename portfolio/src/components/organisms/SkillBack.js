import React from 'react'
import Title from '../atoms/SkillTitle'
import Back from '../molecules/SkillBack'
import styled from 'styled-components'

const Flex = styled.div`
display: flex;
margin-top: 59px;
`

function SkillBack() {
    return (
        <Flex>
        <Title children="Back-end"/>
        <div>
            <Back />
        </div>
        </Flex>
    )
}

export default SkillBack
