import React from 'react'
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProfileImg from '../../image/ProfileImgBig.png'

AOS.init();

const Box = styled.div`
margin-top: 242px;
width: 600px;
height: auto;
`

const Img1 = styled.img`
width: 319px;
height: 415px;
background: #C4C4C4;
display: fixed;
margin-left: 30px;
@media screen and (max-width: 1279px) {
    width: 197px;
    height: 248px; 
  }
@media screen and (max-width: 767px) {
    visibility: hidden;
    width: 10px;
    height: 10px;
}
`
// const Img2 = styled.div`
// width: 257px;
// height: 313px;
// background: black;
// display: fixed;
// z-index: 3;
// margin-top: -200px;
// `

function BannerImages() {
    return (
        <div>
            <Box data-aos="fade-left"  data-aos-duration="500">
                <Img1 src={ProfileImg}/>
                {/* <Img2/> */}
            </Box>
        </div>
    )
}

export default BannerImages
