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
font-weight: normal;
font-size: 22px;
line-height: 26px;
color: #000000;
margin-right: 40px;
border-style: none;
background: none;
`

const NonClick = styled.div`
width: 92px;
height: 26px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 26px;
color: #666363;
`

function HeaderButtons() {
    return (
        <Buttons>
            <Click>
                About Me
            </Click> 
            <Click>
                Archiving
            </Click>
            <Click>
                Skills
            </Click>
            <Click>
                Projects
            </Click>
            <Click>
                Activity
            </Click>
            <Click>
                Contact
            </Click>
        </Buttons>
    )
}

export default HeaderButtons
