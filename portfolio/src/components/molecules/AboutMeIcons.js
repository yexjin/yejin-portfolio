import React from 'react'
import styled from 'styled-components'
import Github from '../../image/github.png'
import Email from '../../image/email.png'

const Icon  = styled.img`
width: 35px;
height: 35px;
margin-right: 31px;
cursor: pointer;
`

const Icons = styled.div`
margin-top: 20px;
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
