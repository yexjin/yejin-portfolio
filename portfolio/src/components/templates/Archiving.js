import React from 'react'
import styled from 'styled-components'
import Title from '../molecules/TemplateHeader'
import Github from '../organisms/ArchivingGithub'
import Tistory from '../organisms/ArchivingTistory'

const Box = styled.div`
width: 100%;
height: 712px;

background: #FFFFFF;
padding-top: 79px;
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
