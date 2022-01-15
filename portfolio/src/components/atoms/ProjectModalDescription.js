import React from 'react'
import styled from 'styled-components'
import GitHub from '../../image/githubBig.png'
import Youtube from '../../image/youtube.png'

const Title = styled.div`
width: 326px;
height: auto;

font-family: Kanit-Medium;
font-size: 14px;
line-height: 20px;

color: #000000;
@media screen and (max-width: 1279px) {
width: 196px;
font-size: 12px;
line-height: 15px;
}
@media screen and (max-width: 767px) {
width: 200px;
font-size: 11px;
}
`

const SubText = styled.div`
margin-top: 19px;
width: 326px;
height: auto;
font-family: Noto-Regular;
font-size: 13px;
line-height: 15px;
color: #000000;
@media screen and (max-width: 1279px) {
width: 196px;
font-size: 11px;
line-height: 12px;
margin-top: 13px;
}
@media screen and (max-width: 767px) {
width: 200px;
font-size: 11px;
}
`
const SkillBox = styled.div`
margin-top: 19px;
margin-bottom: 19px;
@media screen and (max-width: 1279px) {
margin-top: 13px;
margin-bottom: 13px;
}
@media screen and (max-width: 767px) {
    margin-top: 10px;
    margin-bottom: 10px;
}
`

const Skills = styled.div`
margin-top: 5px;
width: 326px;
height: auto;
font-family: Noto-Regular;
font-size: 13px;
line-height: 15px;
color: #000000;
@media screen and (max-width: 1279px) {
    width: 196px;
    margin-bottom: 0px;
    font-size: 10px;
    margin-top: 2px;
}
@media screen and (max-width: 767px) {
    width: 200px;
    font-size: 10px;
    margin-top: 1px;
}
`

const Img = styled.img`
width: 25px;
height: auto;
margin-left: 10px;
@media screen and (max-width: 1279px) {
    width: 18px;
}
@media screen and (max-width: 767px) {
}
`

const Link = styled.a`
font-family: Noto-Regular;
font-size: 13px;
line-height: 15px;
color: #3C3A3A;
text-decoration: none;
@media screen and (max-width: 1279px) {
    font-size: 10px;
}
@media screen and (max-width: 767px) {
}

`


function ProjectModalDescription({project}) {
    return (
        <>
        <Title>
            {project.subtitle}
        </Title>
        <SubText>
            {project.term}
        </SubText>
        <SubText>
            {project.part}
        </SubText>      
        {project.skills.map(skill => (
            <SkillBox>
            <Skills>
                {skill.a}
            </Skills>
            <Skills>
            {skill.b}
        </Skills>
        <Skills>
            {skill.c}
        </Skills>
        <Skills>
            {skill.d}
        </Skills>
        <Skills>
            {skill.e}
        </Skills>
        </SkillBox>
        ))}
        <Link href={project.github} target="_blank" rel="noreferrer">
        <Img src={GitHub} alt="Github링크"/> &nbsp; ⬅ 클릭!
        </Link>
        {
            project.video && (
                <>
                <br />
            <Link href={project.video} target="_blank" rel="noreferrer">
               <Img src={Youtube} alt="youtube 링크"/> &nbsp; ⬅ 클릭!
            </Link>
            </>
            )
        }
        </>
    )
}

export default React.memo(ProjectModalDescription)
