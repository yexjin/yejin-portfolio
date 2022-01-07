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
        <ActivityBox>
            <Activity />
        </ActivityBox>
    )
}

export default MyActivity
