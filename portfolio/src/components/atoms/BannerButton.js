import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const Button = styled.div`
cursor: pointer;
width: 190px;
height: 41px;
padding-top: 8px;
font-family: Kanit-Bold;
font-style: normal;
font-size: 21px;
line-height: 25px;
color: #FFFFFF;
background-color: #FF9898;
text-align: center;
margin-top: 50px;
@media screen and (max-width: 1279px) {
    width: 150px;
    height: 30px;
    font-size: 15px;
    font-weight: medium;
    padding-top: 2.5px;
    margin-top: 30px;
  }
@media screen and (max-width: 767px) {
    width: 127px;
    height: 25px;
    font-size: 13px;
    font-weight: medium;
    padding-top: 1px;
    margin-top: 100px;
}
:hover{
color: #FF9898;
background-color: white;
transition: all 0.5s ease-in-out;
transform: scale(1.1);
}
`

function BannerButton() {
    return (
        <Link to='AboutMe' spy={true} smooth={true}>
            <Button>
                자세히 알아보기
            </Button>
        </Link>
    )
}

export default React.memo(BannerButton)
