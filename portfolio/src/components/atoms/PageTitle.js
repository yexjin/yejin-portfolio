import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
display: flex;
height: 50px;
margin-top: 49px;
`

const Bar = styled.div`
width: 40px;
height: 6px;

background: #FBA2A2;
transform: rotate(-90deg);
`

const Text = styled.div`
margin-right: 15px;
margin-top:-15px;

font-family: Roboto;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 39px;

color: #000000;
`

function PageTitle({children}) {
    return (
        <Title>
            <Bar />
            <Text>{children}</Text>
        </Title>
    )
}

export default PageTitle
