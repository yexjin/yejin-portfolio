import React from 'react'
import styled from 'styled-components'
import Title from '../molecules/TemplateHeader';

const Box = styled.div`
width: 100%;
height: 712px;

background: #FFFFFF;
`

function Archiving() {
    return (
        <Box>
            <Title children='Archiving' />
        </Box>
    )
}

export default Archiving
