import React from 'react'
import styled from 'styled-components'
import Django from '../../image/backend/django.png'
import Koa from '../../image/backend/koa.png'

const Box = styled.div`
width: 300px;
height: 554px;
background: #FFFFFF;
`

const Line = styled.div`
padding-top: 50px;
padding-left: 80px;
`

function SkillBack() {
    return (
        <Box>
            <Line>
                <img src={Django} width="153px" height="60px" alt="htmlcssjs"/> <br />
            </Line>
            <Line>
                <img src={Koa} width="190px" height="67px" alt="리액트" />
            </Line>
        </Box>
    )
}

export default SkillBack
