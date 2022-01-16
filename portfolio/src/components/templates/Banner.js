import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Text from '../molecules/BannerText'
import Image from '../molecules/BannerImages'
import CTLoading from '../organisms/CTLoading'
import { useMediaQuery } from "react-responsive";

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

  const isMobile = useMediaQuery({ query: " (max-width: 767px)" });

    const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  
  return loading ? (
    <CTLoading />
  ) : (
        <Box>
          {(!isMobile) && (
            <>
            <Text />
            <Image />   
            </>
          )}
          {isMobile && (
            <>
            <Text />
            </>
          )}
        </Box>
    )
}

export default Banner
