import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const Buttons = styled.div`
display: flex;
margin-top: 27px;
`

const Click = styled.button`
width: 130px;
height: 26px;
font-family: Roboto;
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 26px;
color: #666363;
margin-right: 40px;
border-style: none;
background: none;
cursor: pointer;

&:hover{
    color: #000000;
}
`

function HeaderButtons() {
    return (
        <Buttons>
            <Link to='AboutMe' spy={true} smooth={true}>
                <Click>
                    About Me
                </Click>
            </Link>
            <Link to='Archiving' spy={true} smooth={true}> 
                <Click>
                    Archiving
                </Click>
            </Link>
            <Link to='Skills' spy={true} smooth={true}> 
                <Click>
                    Skills
                </Click>
            </Link>
            <Link to='Projects' spy={true} smooth={true}>
                <Click>
                    Projects
                </Click>
            </Link>
            <Link to='Activity' spy={true} smooth={true}> 
                <Click>
                    Activity
                </Click>
            </Link>
            <Link to='Contact' spy={true} smooth={true}>
                <Click>
                    Contact
                </Click>
            </Link> 
        </Buttons>
    )
}

export default HeaderButtons