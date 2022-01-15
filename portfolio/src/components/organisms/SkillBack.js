import React from 'react'
import Title from '../atoms/SkillTitle'
import Back from '../molecules/SkillBack'
import styled from 'styled-components'
import { useMediaQuery } from "react-responsive";


const Flex = styled.div`
display: flex;
margin-top: 59px;
justify-content: space-evenly;
`

function SkillBack() {
    const isMobile = useMediaQuery({ query: " (max-width: 767px)" });

    return (
        <>
        {(!isMobile) && (
            <Flex data-aos="fade-up"  data-aos-duration="1000">
            <Title children="Back-end"/>
            <div>
                <Back />
            </div>
            </Flex>
        )}
        {isMobile && (
            <>
            <Title children="Back-end"/>
            <div>
                <Back />
            </div>
            </>
        )

        }
        </>
    )
}

export default SkillBack
