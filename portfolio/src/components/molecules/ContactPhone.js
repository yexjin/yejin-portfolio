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
font-family: Kanit-Regular;
font-style: normal;
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

    const phone = contact.find(item=> item.id===1);

    return (
        <div>
            <Flex>
                <Img src={phone.icon} alt="아이콘"/>
                <Value>{phone.value}</Value>
            </Flex>            
        </div>
    )
}

export default ContactPhone
