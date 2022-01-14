import React from 'react'
import styled from 'styled-components'
import Activity from '../atoms/MyActivity'

const ActivityBox = styled.div`
height: 318px;
width: auto;
padding-top: 40px;
`

function MyActivity() {
    return (
        <ActivityBox data-aos="fade-up"  data-aos-duration="1000">
            <Activity />
        </ActivityBox>
    )
}

export default MyActivity
