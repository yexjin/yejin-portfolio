import React from 'react'
import styled from 'styled-components'

const TextBox = styled.div`
height: auto;
width: 326px;
`

const Text = styled.div`
font-family: Noto-Redular;
font-size: 13px;
line-height: 15px;

color: #3C3A3A;
margin-bottom: 10px;
`

function ProjectModalSubDescription({project}) {
    return (
        <TextBox>
            {project.map(text=>(
                <>
                <Text>
                    {text.a}
                </Text>
                <Text>
                {text.b}
                </Text>
                <Text>
                {text.c}
                </Text>
            </>
            ))}
        </TextBox>
    )
}

export default ProjectModalSubDescription
