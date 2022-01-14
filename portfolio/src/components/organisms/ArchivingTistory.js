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
        <Content data-aos="fade-up"  data-aos-duration="1000">
            <a href="https://yexjinitlog.tistory.com" target="_blank" style={{textDecoration:'none'}} rel="noreferrer">
            <Img img={TistoryIcon}/>
            </a>
            <Tistory />
        </Content>
    )
}

export default ArchivingTistory
