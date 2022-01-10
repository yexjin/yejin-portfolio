import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
margin-top: 192px;
width: 600px;
height: auto;
`

const Img1 = styled.div`
width: 319px;
height: 415px;
background: #C4C4C4;
display: fixed;
margin-left: 100px;
`
const Img2 = styled.div`
width: 257px;
height: 313px;
background: black;
display: fixed;
z-index: 3;
margin-top: -200px;
`

function BannerImages() {
    return (
        <div>
            <Box>
                <Img1/>
                <Img2/>
            </Box>
        </div>
    )
}

export default BannerImages
