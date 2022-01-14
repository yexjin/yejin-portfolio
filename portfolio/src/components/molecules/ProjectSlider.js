import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components'

import prevButton from '../../image/prevButton.png'
import nextButton from '../../image/nextButton.png'

import { Projects } from '../../data'
import Box from '../atoms/ProjectBox'

const Prev = styled.img`
width: 50px;
height: 50px;
z-index: 5;
margin-left: -40px;
margin-top: -30px;
`

const Next = styled.img`
width: 50px;
height: 50px;
z-index: 5;
margin-right: -40px;
margin-top: -30px;
`

function ProjectSlider() {

    const { list } = Projects();
    
    
    const PrevArrow=({currentSlide,slideCount,...props})=>(
        <Prev {...props} src={prevButton} className="slick-prev" /> 
    )

    const NextArrow=({currentSlide,slideCount,...props})=>(
        <Next {...props} src={nextButton} className="slick-next" /> 
    )

    const settings = {
        dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
        infinite: true, // loop를 만들지(마지막 이미지-처음 이미지-중간 이미지들-마지막 이미지)
        speed: 500, // 애미메이션의 속도, 단위는 milliseconds
        slidesToShow: 2, // 한번에 몇개의 슬라이드를 보여줄 지
        slidesToScroll: 2, // 한번 스크롤시 몇장의 슬라이드를 넘길지
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,	
      };

    return (
        <Slider {...settings}>
            
                {list.map((project) => {             
                    return (<div>
                    <Box key={project.id} item={project} />
                    </div>)
                })}
        </Slider>
    )
}

export default ProjectSlider
