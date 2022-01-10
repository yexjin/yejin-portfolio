import React from 'react'
import styled from 'styled-components'
import Name from './Myname'

const Img = styled.div`
width: 230px;
height: 230px;
border-radius: 50%;

background: #C4C4C4;
`

const Text = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 18px;

color: #666363;
width: 223px;
text-align: center;
margin-left: 5px;
margin-top: 5px;
`

function MyImg() {
    return (
        <div data-aos="fade-up"  data-aos-duration="1000">
        <Img />
        <Name />
        <Text>
            끊임없이 성장하는 개발자,<br />오예진입니다.
        </Text>
        </div>
    )
}

export default MyImg
