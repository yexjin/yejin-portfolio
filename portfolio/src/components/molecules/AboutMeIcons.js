import React from 'react'
import styled from 'styled-components'
import Github from '../../image/github.png'
import Email from '../../image/email.png'

const Icon  = styled.img`
width: 28px;
height: 28px;
cursor: pointer;

@media screen and (max-width: 1279px) {
    width: 23px;
    height: 23px;
    margin-right: 20px;
  }

@media screen and (max-width: 767px) {
    width: 18px;
    height: 18px;
    margin-right: 20px;
}
`

const Icons = styled.div`
margin-left: 13px;
margin-top: 20px;
width: 120px;
display: flex;
justify-content: space-evenly;
@media screen and (max-width: 1279px) {
    width: 100px;
    margin-left: 15px;
    margin-top: 0px;
  }
@media screen and (max-width: 767px) {
    width: 60px;
    margin-left: 25px;
    margin-top: 10px;
}
`

function AboutMeIcons() {
    return (
        <Icons>
            <a href="https://github.com/yexjin" target="_blank" rel="noreferrer">
            <Icon src={Github} alt="깃헙아이콘"/>
            </a>
            <a href="mailto:dpwls0421@seoultech.ac.kr" target="_blank" rel="noreferrer">
            <Icon src={Email} alt="이메일아이콘"/>
            </a>
        </Icons>
    )
}

export default AboutMeIcons
