import React from 'react'
import styled from 'styled-components'
import Icons from '../molecules/AboutMeIcons'
import Inform from '../atoms/AboutMeItem'

const InformBox = styled.div`
height: 318px;
width: auto;
padding-top: 40px;
@media screen and (max-width: 1279px) {
    height: 250px;
    padding-top: 15px;
  }
@media screen and (max-width: 767px) {
    height: 180px;
    padding-top: 0px;
}
`

function AboutMeInform() {
    return (
        <InformBox data-aos="fade-up"  data-aos-duration="1000">
            <Inform />
            <Icons />
        </InformBox>
    )
}

export default AboutMeInform
