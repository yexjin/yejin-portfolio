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
`

const Bar = styled.div`
width: 330px;
height: 0px;

border: 1px solid #737373;
margin-top: 19px;
margin-bottom: 19px;
`

const SubBar = styled.div`
width: 142px;
height: 0px;

border: 0.5px solid #747474;
margin: 0 auto;
margin-top: 45px;
margin-bottom: 45px;
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
