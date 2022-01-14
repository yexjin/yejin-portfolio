import React from 'react'
import styled from 'styled-components'
import ModalImg from '../molecules/ProjectModalImg'
import ModalText from '../molecules/ProjectModalText'

const Box = styled.div`
display: flex;
margin-left: 60px;

`

function ModalContents({project}) {

    return (
        <Box>
            <ModalImg detail={project.detailImg}/>
            <ModalText project={project} />
        </Box>
    )
}

export default ModalContents
