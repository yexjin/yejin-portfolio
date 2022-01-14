import React from "react"
import styled from 'styled-components'
import SlideBox from '../molecules/ProjectSlider'

const Content = styled.div`
margin: 0 auto;
width: 1000px;
margin-top: 150px;
`

function ProjectsSlide() {

    return (
        <>
        <Content>
            <SlideBox />
        </Content>
        </>
    )
}

export default ProjectsSlide


