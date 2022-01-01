import React from 'react'
import styled from 'styled-components'
import Bar from '../atoms/BannerBar'
import BigText from '../atoms/BannerBigText'
import SmallText from '../atoms/BannerSmallText'
import Button from '../atoms/BannerButton'

const Box = styled.div`
padding-top: 192px;
margin-left: 200px;
`

function BannerText() {
    return (
        <Box>
         <BigText />
         <Bar />
         <SmallText />
         <Button />   
        </Box>
    )
}

export default BannerText
