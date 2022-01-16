import React from 'react'
import styled from 'styled-components'
import Bar from '../atoms/BannerBar'
import BigText from '../atoms/BannerBigText'
import SmallText from '../atoms/BannerSmallText'
import Button from '../atoms/BannerButton'
import { Link } from 'react-scroll'


const Box = styled.div`
padding-top: 192px;
@media screen and (max-width: 1279px) {
    padding-top: 154px; 
    margin-left: 65px;
  }
@media screen and (max-width: 767px) {
    padding-top: 146px;
    margin-left: 23px;
}
`

function BannerText() {
    return (
        <Box data-aos="fade-up"  data-aos-duration="1000">
         <BigText />
         <Bar />
         <SmallText />
         <Link to='About Me' spy={true} smooth={true}>
         <Button /> 
         </Link>  
        </Box>
    )
}

export default BannerText
