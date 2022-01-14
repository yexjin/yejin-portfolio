import React from 'react'
import styled from 'styled-components'
import Name from './Myname'
import Profile from '../../image/ProfileImgSmall.png'

const Img = styled.img`
width: 230px;
height: 230px;
border-radius: 50%;

@media screen and (max-width: 1279px) {
    width: 130px;
    height: 130px;
  }
@media screen and (max-width: 767px) {
    width: 120px;
    height: 120px;
}
`

const Text = styled.div`
font-family: Noto-Regular;
font-style: normal;
font-size: 15px;
line-height: 18px;

color: #666363;
width: 223px;
text-align: center;
margin-left: 5px;
margin-top: 5px;
@media screen and (max-width: 1279px) {
    font-size: 13px;
    width: 100px;
  }
@media screen and (max-width: 767px) {
    font-size: 10px;
    margin-left: 10px;
    line-height: 13px;
    width: 110px;
}
`

function MyImg() {
    return (
        <div data-aos="fade-up"  data-aos-duration="1000">
            <Img src={Profile}/>
            <Name />
            <Text>
                끊임없이 성장하는 개발자,<br />오예진입니다.
            </Text>
        </div>
    )
}

export default MyImg
