import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
@media screen and (max-width: 1279px) {
    width: 75px;
    height: 75px;
  }
@media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
}
`

function ArchivingImg({img}) {
    return (
        <Image src={img} />
    )
}

export default ArchivingImg
