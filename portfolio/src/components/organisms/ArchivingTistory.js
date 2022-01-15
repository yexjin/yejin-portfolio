import React from 'react'
import styled from 'styled-components'
import TistoryIcon from '../../image/tistory.png'
import Img from '../atoms/ArchivingImg'
import Tistory from '../molecules/ArchivingTis'

const Content = styled.div`
display: flex;
justify-content: space-evenly;
margin-left: 349px;
margin-right: 366px;
margin-top: 131px;
@media screen and (max-width: 1279px) {
    margin-left: 112px;
    margin-right: 115px;
    margin-top: 45px;
  }
@media screen and (max-width: 767px) {
    margin-left: 50px;
    margin-right: 38px;
    margin-top: 30px;
}
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
