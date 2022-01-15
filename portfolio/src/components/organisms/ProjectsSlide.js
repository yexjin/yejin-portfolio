import React from "react"
import styled from 'styled-components'
import SlideBox from '../molecules/ProjectSlider'

const Content = styled.div`
margin: 0 auto;
width: 1000px;
margin-top: 150px;
@media screen and (max-width: 1279px) {
margin-top: 120px;
width: 600px;
}
@media screen and (max-width: 767px) {
    margin-top: 40px;
    width: 256px;

}
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


