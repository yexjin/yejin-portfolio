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
        <Content>
            <Img img={GitIcon}/>
            <Github />
        </Content>
    )
}

export default ArchivingGithub
