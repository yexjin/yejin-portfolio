import React from 'react'
import styled from 'styled-components'

const Flex = styled.div`
display: flex;
`
const Items = styled.div`
display: flex;
width: 70px;
height: 23px;
`

const Item = styled.div`
height: 25px;
width: 100px;

font-family: Roboto;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;

color: #000000;
margin-bottom: 14px;
text-align: center;
`

const Values = styled.div`

`

const Value = styled.div`
height: 25px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 25px;

color: #000000;
margin-bottom: 14px;
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
        </>
    )
}

export default MyActivity
