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

function ContactPhone() {

    const { contact } = Contact();

    return (
        <div>
            {contact.map(item=>
            <Flex>
                <Img src={item.icon} alt="아이콘"/>
                <Value>{item.value}</Value>
            </Flex>    
            )}        
        </div>
    )
}

export default ContactPhone
