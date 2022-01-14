import React from 'react'
import Title from '../atoms/SkillTitle'
import Front from '../molecules/SkillFront'
import styled from 'styled-components'

const Flex = styled.div`
display: flex;
`

function SkillFront() {
    return (
        <Flex data-aos="fade-up"  data-aos-duration="1000">
            <Title children="Front-end"/>
            <div>
                <Front />
            </div>
        </Flex>
    )
}

export default SkillFront