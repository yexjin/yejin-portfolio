import React from 'react'
import styled from 'styled-components'
import Html from '../../image/frontend/htmlcssjs.png'
import ReactIcon from '../../image/frontend/react.png'
import Redux from '../../image/frontend/redux.png'
import Axios from '../../image/frontend/axios.png'

const Box = styled.div`
width: 300px;
height: 554px;
background: #FFFFFF;
`

const Line = styled.div`
padding-top: 40px;
padding-left: 32px;
`

function SkillFront() {
    return (
        <Box>
            <Line>
                <img src={Html} width="231px" height="107px" alt="htmlcssjs"/> <br />
            </Line>
            <Line>
                <img src={ReactIcon} width="104px" height="114px" alt="리액트" />
                <img src={Redux} width="104px" height="114px" alt="리덕스" /> <br />
            </Line>
            <Line>
                <img src={Axios} width="200px" height="45px" alt="axios" /> 
            </Line>
        </Box>
    )
}

export default SkillFront
