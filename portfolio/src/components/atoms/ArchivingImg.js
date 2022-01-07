import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
`

function ArchivingImg({img}) {
    return (
        <Image src={img} />
    )
}

export default ArchivingImg
