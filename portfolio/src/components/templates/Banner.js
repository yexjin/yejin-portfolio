import React from 'react'
import styled from 'styled-components'
import Text from '../molecules/BannerText'
import Image from '../molecules/BannerImages'

const Box = styled.div`
display: flex;
justify-content: space-between;
height: 839px;
margin-bottom: 79px;
@media screen and (max-width: 1279px) {
    height: 500px;
    margin-bottom: 104px;
  }
@media screen and (max-width: 767px) {

    height: 403px;
}
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
