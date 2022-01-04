import React from 'react'
import styled from 'styled-components'
import Icons from '../molecules/AboutMeIcons'
import Inform from '../atoms/AboutMeItem'

const InformBox = styled.div`
height: 318px;
width: auto;
padding-top: 40px;
`

function AboutMeInform() {
    return (
        <InformBox>
            <Inform />
            <Icons />
        </InformBox>
    )
}

export default AboutMeInform
