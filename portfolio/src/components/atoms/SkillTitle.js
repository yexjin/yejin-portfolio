import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
font-family: Kanit-Medium;
font-style: normal;
font-size: 25px;
line-height: 29px;

color: #8D8989;
width: auto;
`


function SkillTitle({children}) {
    return (<Title>
            {children}
            </Title>
    )
}

export default SkillTitle