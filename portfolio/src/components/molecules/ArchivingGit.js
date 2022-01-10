import React from 'react'
import styled from 'styled-components'
import Title from '../atoms/ArchivingTitle'
import Text from '../atoms/ArchivingText'

const Content = styled.div`
`

function ArchivingGit() {
    return (
        <Content>
            <a href="https://github.com/yexjin" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
            <Title children="GitHub"/>
            </a>
            <Text children="• 소스코드 저장소 입니다."/>
            <Text children="• 다양한 프로젝트 및 공부한 내용의 코드들을 확인하러 오세요 :)"/>
        </Content>
    )
}

export default ArchivingGit
