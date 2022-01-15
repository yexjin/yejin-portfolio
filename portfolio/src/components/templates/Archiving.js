import React from 'react'
import styled from 'styled-components'
import Title from '../molecules/TemplateHeader'
import Github from '../organisms/ArchivingGithub'
import Tistory from '../organisms/ArchivingTistory'

const Box = styled.div`
width: 100%;
height: 750px;

background: #FFFFFF;
padding-top: 40px;
@media screen and (max-width: 1279px) {
    height: 580px;
  }
@media screen and (max-width: 767px) {
    height: 470px;
}
`

function Archiving() {
    return (
        <Box>
            <Title children='Archiving' />
            <Github />
            <Tistory />
        </Box>
    )
}

export default Archiving
