import React from 'react'
import styled from 'styled-components'

const TitleBox = styled.div`
width: 300px;
height: 43px;
padding-top: 14px;
background-color: #848484;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 33px;
text-align: center;

color: #FFFFFF;
`

function SkillTitle({children}) {
    return (
        <TitleBox>
            {children}
        </TitleBox>
    )
}

export default SkillTitle
