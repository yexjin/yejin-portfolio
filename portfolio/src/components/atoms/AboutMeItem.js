import React from 'react'
import styled from 'styled-components'

const Flex = styled.div`
display: flex;
`
const Items = styled.div`
width: 70px;
height: 23px;
`

const Item = styled.div`
height: 25px;
width: 100px;

font-family: Noto-Medium;
font-style: normal;
font-size: 18px;
line-height: 25px;

color: #000000;
margin-bottom: 14px;
text-align: center;
`

const Value = styled.div`
height: 25px;

font-family: Noto-Regular;
font-style: normal;
font-size: 18px;
line-height: 25px;

color: #000000;
margin-bottom: 14px;
margin-left: 92px;
`

const items = [
    {
        id: 1,
        name: '이름',
        value: '오예진'
    },
    {
        id: 2,
        name: '생년월일',
        value: '2000/04/21'
    },
    {
        id: 3,
        name: '연락처',
        value: '010-9295-9776'
    },
    {
        id: 4,
        name: '이메일',
        value: 'dpwls0421@seoultech.ac.kr'
    },
    {
        id: 5,
        name: '학력',
        value: '서울과학기술대학교 컴퓨터공학과'
    }
]

function AboutMeItem() {
    return (
        <>
            {items.map(item => (
                <Flex key={item.id}>
                    <Items>
                        <Item>{item.name}</Item>
                    </Items>
                    <Value>{item.value}</Value>
                </Flex>
            ))}
        </>
    )
}

export default AboutMeItem
