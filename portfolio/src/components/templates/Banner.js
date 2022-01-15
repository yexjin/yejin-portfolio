import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Text from '../molecules/BannerText'
import Image from '../molecules/BannerImages'
import CTLoading from '../organisms/CTLoading'

const Box = styled.div`
display: flex;
justify-content: space-evenly;
height: 839px;
margin-bottom: 79px;
@media screen and (max-width: 1279px) {
    height: 500px;
    margin-bottom: 104px;
  }
@media screen and (max-width: 767px) {
    height: 500px;
}
`

function Banner() {
    const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  
  return loading ? (
    <CTLoading />
  ) : (
        <Box>
         <Text />
         <Image />   
        </Box>
    )
}

export default Banner
