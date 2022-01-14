import React from 'react'
import styled from 'styled-components'
import Activity from '../atoms/MyActivity'

const ActivityBox = styled.div`
height: 318px;
width: auto;
padding-top: 40px;
@media screen and (max-width: 1279px) {
    height: 250px;
    padding-top: 15px;
  }
@media screen and (max-width: 767px) {
    height: 180px;
    padding-top: 0px;
}
`

function MyActivity() {
    return (
        <ActivityBox data-aos="fade-up"  data-aos-duration="1000">
            <Activity />
        </ActivityBox>
    )
}

export default MyActivity
