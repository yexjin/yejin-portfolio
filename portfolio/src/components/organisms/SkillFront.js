import React from 'react'
import Title from '../atoms/SkillTitle'
import Front from '../molecules/SkillFront'
import styled from 'styled-components'
import { useMediaQuery } from "react-responsive";


const Flex = styled.div`
display: flex;
justify-content: space-evenly;
`

function SkillFront() {

    const isMobile = useMediaQuery({ query: " (max-width: 767px)" });

    return (
        <>
        {(!isMobile) && (
            <Flex data-aos="fade-up"  data-aos-duration="1000">
                <Title children="Front-end"/>
                <div>
                    <Front />
                </div>
            </Flex>
        )}
        {isMobile && (
            <>
            <Title children="Front-end"/>
            <div>
                <Front />
            </div>
            </>
        )}
        </>
    )
}

export default SkillFront