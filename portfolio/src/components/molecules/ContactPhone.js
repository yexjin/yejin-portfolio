import React from 'react'
import { Contact } from '../../data'
import styled from 'styled-components'

const Img = styled.img`
width: 35px;
height: 35px;
@media screen and (max-width: 1279px) {
width: 25px;
height: 25px;
}
@media screen and (max-width: 767px) {
    width: 18px;
    height: 18px;
}
`

const Value = styled.div`
width: 228px;
text-align: center;
font-family: Kanit-Regular;
font-style: normal;
font-size: 23px;
line-height: 27px;

color: #000000;
@media screen and (max-width: 1279px) {
    width: 150px;
    font-size: 18px;
    line-height: 20px;
    margin-top: 3px;
}
@media screen and (max-width: 767px) {
    width: 100px;
    font-size:13px;
    line-height: 17px;
    margin-top: 2px;
}
`

const Flex = styled.div`
display: flex;
justify-content: space-evenly;
margin-bottom: 20px;
@media screen and (max-width: 1279px) {
    margin-bottom: 13px;
}
@media screen and (max-width: 767px) {
    margin-bottom: 10px;
}
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
