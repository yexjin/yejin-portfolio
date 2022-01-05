import React from 'react'
import styled from 'styled-components'
import Text from '../molecules/BannerText'
import Image from '../molecules/BannerImages'

const Box = styled.div`
display: flex;
justify-content: space-between;
height: 839px;
padding-top: px;
padding-bottom: 79px;
`

function Banner() {
    return (
        <Box>
         <Text />
         <Image />   
        </Box>
    )
}

export default Banner
