import React from 'react'
import styled from 'styled-components'

const Flex = styled.div`
display: flex;
`
const Items = styled.div`
width: 70px;
@media screen and (max-width: 1279px) {
width: 50px;
  }
@media screen and (max-width: 767px) {
    width: 30px;
}
`

const Item = styled.div`
width: 100px;

font-family: Noto-Medium;
font-size: 18px;
line-height: 25px;

color: #000000;
margin-bottom: 14px;
text-align: center;

@media screen and (max-width: 1279px) {
    font-size: 14px;
    margin-bottom: 12px;
    width: 60px;
  }

@media screen and (max-width: 767px) {
    font-size: 12px;
    margin-bottom: 0px;
    width: 50px;

}
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
@media screen and (max-width: 1279px) {
    font-size: 14px;
    margin-bottom: 0px;
    margin-left: 50px;
  }
@media screen and (max-width: 767px) {
    font-size: 13px;
     margin-bottom: 0px;
     margin-left: 30px;
}
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
