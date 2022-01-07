import React from 'react'
import styled from 'styled-components'
import Github from '../../image/github.png'
import Email from '../../image/email.png'

const Icon  = styled.img`
width: 28px;
height: 28px;
cursor: pointer;

`

const Icons = styled.div`
margin-left: 13px;
margin-top: 20px;
width: 120px;
display: flex;
justify-content: space-evenly;
`

function AboutMeIcons() {
    return (
        <Icons>
            <Icon src={Github} alt="깃헙아이콘"/>
            <Icon src={Email} alt="이메일아이콘"/>
        </Icons>
    )
}

export default AboutMeIcons
