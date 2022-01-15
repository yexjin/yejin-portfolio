import React from 'react'
import Title from '../atoms/SkillTitle'
import Commu from '../molecules/SkillCommu'
import styled from 'styled-components'
import { useMediaQuery } from "react-responsive";

const Flex = styled.div`
display: flex;
margin-top: 30px;
justify-content: space-evenly;
@media screen and (max-width: 767px) {
margin-top: 10px;
}
`

function SkillCommu() {
    const isMobile = useMediaQuery({ query: " (max-width: 767px)" });

    return (
        <>
        {(!isMobile) && (
            <Flex data-aos="fade-up"  data-aos-duration="1000">
                <Title children="Communication"/>
                <Commu />
            </Flex>
        )}
        {isMobile && (
            <div data-aos="fade-up"  data-aos-duration="1000">
            <Title children="Communication"/>
            <Flex>
            <Commu />
            </Flex>
            </div>
        )}
        </>
    )
}

export default SkillCommu
