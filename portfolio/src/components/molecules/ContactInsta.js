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

function ContactInsta() {

    const { contact } = Contact();

    const insta = contact.find(item=> item.id===3);

    return (
        <div>
            <Flex>
                <a href="https://www.instagram.com/yexjin_/" target="_blank" style={{textDecoration: 'none'}} rel="noreferrer">
                <Img src={insta.icon} alt="아이콘"/>
                </a>
                <a href="https://www.instagram.com/yexjin_/" target="_blank" style={{textDecoration: 'none'}} rel="noreferrer">
                <Value>{insta.value}</Value>
                </a>
            </Flex>            
        </div>
    )
}

export default ContactInsta
