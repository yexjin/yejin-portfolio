import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
width: 205px;
height: 10px;

background: #FBA2A2;
margin-bottom: 37px;
@media screen and (max-width: 1279px) {
    height: 7px;
    margin-bottom: 30px;
  }
@media screen and (max-width: 767px) {
    height: 5px;
    margin-bottom: 30px;
}
`

function BannerBar() {
    return (
        <Bar />
    )
}

export default React.memo(BannerBar)
