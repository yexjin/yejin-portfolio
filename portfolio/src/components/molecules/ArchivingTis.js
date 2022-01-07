import React from 'react'
import styled from 'styled-components'
import Title from '../atoms/ArchivingTitle'
import Text from '../atoms/ArchivingText'

const Content = styled.div`
`

function ArchivingTis() {
    return (
        <Content>
        <Title children="Tistory"/>
        <Text children="• 공부하고 개발한 기록을 끄적끄적 적어놓은 블로그입니다. "/>
        <Text children="• 알고리즘, 리액트, 프로젝트 위주로 쓰여져있고, 앞으로도 계속해서 채워나갈 예정입니다 :)"/>
    </Content>
    )
}

export default ArchivingTis
