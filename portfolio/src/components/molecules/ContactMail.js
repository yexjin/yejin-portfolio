import React from 'react'
import { Contact } from '../../data'
import styled from 'styled-components'

const Img = styled.img`
width: 35px;
height: 35px;
`

const Value = styled.div`
width: 228px;
height: 39px;
text-align: center;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 23px;
line-height: 27px;

color: #000000;
margin-top: 5px;
`

const Flex = styled.div`
display: flex;
justify-content: space-evenly;
margin-bottom: 20px;
`

function ContactMail() {

    const { contact } = Contact();

    const mail = contact.find(item=> item.id===2);

    return (
        <div>
            <Flex>
                <a href="mailto:dpwls0421@seoultech.ac.kr" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                <Img src={mail.icon} alt="아이콘"/>
                </a>
                <a href="mailto:dpwls0421@seoultech.ac.kr" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                <Value>{mail.value}</Value>
                </a>
            </Flex>            
        </div>
    )
}

export default ContactMail
