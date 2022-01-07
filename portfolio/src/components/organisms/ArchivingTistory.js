import React from 'react'
import styled from 'styled-components'
import TistoryIcon from '../../image/tistory.png'
import Img from '../atoms/ArchivingImg'
import Tistory from '../molecules/ArchivingTis'

const Content = styled.div`
display: flex;
justify-content: space-between;
margin-left: 349px;
margin-right: 366px;
margin-top: 131px;
`

function ArchivingTistory() {
    return (
        <Content>
            <Img img={TistoryIcon}/>
            <Tistory />
        </Content>
    )
}

export default ArchivingTistory
