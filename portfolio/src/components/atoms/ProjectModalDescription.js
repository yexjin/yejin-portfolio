import React from 'react'
import styled from 'styled-components'
import GitHub from '../../image/githubBig.png'

const Title = styled.div`
width: 326px;
height: auto;

font-family: Noto-Redular;
font-size: 14px;
line-height: 15px;

color: #000000;
`

const SubText = styled.div`
margin-top: 19px;
width: 326px;
height: auto;

font-family: Noto-Redular;
font-size: 13px;
line-height: 15px;

color: #000000;
`
const SkillBox = styled.div`
margin-top: 19px;
margin-bottom: 19px;
`

const Skills = styled.div`
margin-top: 5px;
width: 326px;
height: auto;

font-family: Noto-Redular;
font-size: 13px;
line-height: 15px;

color: #000000;
`

const GitImg = styled.img`
width: 25px;
height: 25px;
margin-left: 10px;
`

const Link = styled.a`
font-family: Noto-Redular;
font-size: 13px;
line-height: 15px;

color: #3C3A3A;

text-decoration: none;

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
                •{skill.a}
            </Skills>
            <Skills>
            •{skill.b}
        </Skills>
        <Skills>
            •{skill.c}
        </Skills>
        <Skills>
            •{skill.d}
        </Skills>
        <Skills>
            •{skill.e}
        </Skills>
        </SkillBox>
        ))}
        <Link href={project.github} target="_blank">
        <GitImg src={GitHub} alt="Github링크"/> &nbsp; ⬅ 클릭!
        </Link>

        </>
    )
}

export default ProjectModalDescription
