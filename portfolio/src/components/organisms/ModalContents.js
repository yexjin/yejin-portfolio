import React from 'react'
import styled from 'styled-components'
import ModalImg from '../molecules/ProjectModalImg'
import ModalText from '../molecules/ProjectModalText'
import { useMediaQuery } from "react-responsive";

const Box = styled.div`
display: flex;
margin-left: 60px;
@media screen and (max-width: 1279px) {
    margin-left: 20px;
}
`

const MobileBox = styled.div`
width: 270px;
margin: 0 auto;
overflow: auto;
overflow-x: hidden;
height: 400px;
`

function ModalContents({project}) {

    const isMobile = useMediaQuery({ query: " (max-width: 767px)" })

    return (
        <>
        {(!isMobile) && (
            <Box>
            <ModalImg detail={project.detailImg}/>
            <ModalText project={project} />
            </Box>
        )}
        {isMobile && (
            <MobileBox>
            <ModalImg detail={project.detailImg}/>
            <ModalText project={project} />
            </MobileBox>
        )}
        </>
    )
}

export default ModalContents
