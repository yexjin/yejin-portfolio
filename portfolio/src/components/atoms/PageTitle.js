import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
display: flex;
height: 50px;
margin-top: 49px;
@media screen and (max-width: 1279px) {

  }
@media screen and (max-width: 767px) {
    height: 25px;
    margin-top: 30px;
}
`

const Bar = styled.div`
width: 40px;
height: 6px;

background: #FBA2A2;
transform: rotate(-90deg);
@media screen and (max-width: 1279px) {
    width: 30px;
  }
@media screen and (max-width: 767px) {
    width: 25px;
    height: 4px;
}
`

const Text = styled.div`
margin-top:-18px;

font-family: Kanit-SemiBold;
font-style: normal;
font-size: 30px;
line-height: 39px;

color: #000000;

@media screen and (max-width: 1279px) {
    font-size: 25px;
  }

@media screen and (max-width: 767px) {
    font-size: 18px;
}
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
