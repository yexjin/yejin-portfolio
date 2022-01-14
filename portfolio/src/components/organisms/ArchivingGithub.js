import React from 'react'
import styled from 'styled-components'
import GitIcon from '../../image/githubBig.png'
import Img from '../atoms/ArchivingImg'
import Github from '../molecules/ArchivingGit'

const Content = styled.div`
display: flex;
justify-content: space-between;
margin-left: 349px;
margin-right: 366px;
margin-top: 80px;
`

function ArchivingGithub() {
    return (
        <Content data-aos="fade-up"  data-aos-duration="1000">
            <a href="https://github.com/yexjin" target="_blank" style={{textDecoration:'none'}} rel="noreferrer">
            <Img img={GitIcon}/>
            </a>
            <Github />
        </Content>
    )
}

export default ArchivingGithub
