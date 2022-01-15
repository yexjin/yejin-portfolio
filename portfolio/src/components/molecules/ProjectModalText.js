import React from 'react'
import styled from 'styled-components'
import Title from '../atoms/ProjectModalTitle'
import Description from '../atoms/ProjectModalDescription'
import SubDescription from '../atoms/ProjectModalSubDescription'

const Box = styled.div`
margin-left: 50px;
overflow: auto;
overflow-x: hidden;
height: 400px;
@media screen and (max-width: 1279px) {
    margin-left: 30px;
    height: 297px;
}
@media screen and (max-width: 767px) {
    overflow: unset;
    margin-left: 0px;
    margin-top: 20px;
}
`

const Bar = styled.div`
width: 330px;
height: 0px;

border: 1px solid #737373;
margin-top: 19px;
margin-bottom: 19px;
@media screen and (max-width: 1279px) {
    width: 196px;
    margin-top: 15px;
    margin-bottom: 15px;
}
@media screen and (max-width: 767px) {
    width: 270px;
    margin-top: 10px;
    margin-bottom: 13px;
}
`

const SubBar = styled.div`
width: 142px;
height: 0px;

border: 0.5px solid #747474;
margin: 0 auto;
margin-top: 45px;
margin-bottom: 45px;
@media screen and (max-width: 1279px) {
    width: 90px;
    margin-bottom: 30px;
    margin-top: 30px;
}
@media screen and (max-width: 767px) {
}
`

function ProjectModalText({project}) {
    return (
        <Box>
            <Title text={project.title}/>
            <Bar />
            <Description project={project} />
            <SubBar />
            <SubDescription project={project.description} />
        </Box>
    )
}

export default ProjectModalText
