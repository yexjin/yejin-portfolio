import React from 'react'
import styled from 'styled-components'

const Flex = styled.div`
display: flex;
`
const Items = styled.div`
display: flex;
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
font-style: normal;
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

const Values = styled.div`

`

const Value = styled.div`
height: 25px;

font-family: Noto-Regular;
font-style: normal;
font-size: 18px;
line-height: 25px;

color: #000000;
margin-bottom: 14px;
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

const activities = [
    {
        id: 1,
        year: '2019',
        title: '곡성 고등학교 졸업'
    },
    {
        id: 2,
        year: '2019',
        title: '서울과학기술대학교 입학'
    },
    {
        id: 3,
        year: '2020',
        title: '교내 학술동아리 EC 인사부장'
    },
    {
        id: 4,
        year: '2021',
        title: '교내 학술동아리 EC 인사부장'
    },
    {
        id: 5,
        year: '2021',
        title: '멋쟁이사자처럼 9기 수료'
    },
    {
        id: 6,
        year: '2021',
        title: '2021 한이음 공모전 입선'
    },
    {
        id: 7,
        year: '2022',
        title: 'Surfee 스타트업 FE 개발'
    },
    {
        id: 8,
        year: '2022',
        title: '정보처리기사 취득'
    },
    {
        id: 9,
        year: '2022',
        title: 'AUSG 6기 활동중'
    },
]

function MyActivity() {
    return (
        <>
        <Flex>
            <Items>
                <Item>2019</Item>
            </Items>
            <Values>
            {activities.map(activity=>(
                activity.year === '2019' && (
                        <Value>
                            {activity.title}
                        </Value>
                )
                ))}
            </Values>
            </Flex>
        <Flex>
            <Items>
                <Item>2020</Item>
            </Items>
            <Values>
            {activities.map(activity=>(
                activity.year === '2020' && (
                        <Value>
                            {activity.title}
                        </Value>
                )
                ))}
            </Values>
        </Flex>
        <Flex>
            <Items>
                <Item>2021</Item>
            </Items>
            <Values>
            {activities.map(activity=>(
                activity.year === '2021' && (
                        <Value>
                            {activity.title}
                        </Value>
                )
                ))}
            </Values>
        </Flex>
        <Flex>
            <Items>
                <Item>2022</Item>
            </Items>
            <Values>
            {activities.map(activity=>(
                activity.year === '2022' && (
                        <Value>
                            {activity.title}
                        </Value>
                )
                ))}
            </Values>
        </Flex>
        </>
    )
}

export default MyActivity
