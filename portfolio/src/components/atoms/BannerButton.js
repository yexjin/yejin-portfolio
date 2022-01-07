import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const Button = styled.div`
cursor: pointer;
width: 190px;
height: 30px;
padding-top: 10px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 21px;
line-height: 25px;

color: #FFFFFF;
background-color: #FF9898;
text-align: center;
margin-top: 37px;
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

export default BannerButton
