import React from 'react'
import styled from 'styled-components'
import Bar from '../atoms/BannerBar'
import BigText from '../atoms/BannerBigText'
import SmallText from '../atoms/BannerSmallText'
import Button from '../atoms/BannerButton'
import { Link } from 'react-scroll'

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
         <Link to='About Me' spy={true} smooth={true}>
         <Button /> 
         </Link>  
        </Box>
    )
}

export default BannerText
