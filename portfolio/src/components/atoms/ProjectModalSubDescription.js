import React from 'react'
import styled from 'styled-components'

const TextBox = styled.div`
height: auto;
width: 326px;
@media screen and (max-width: 1279px) {
    width: 196px;
}
@media screen and (max-width: 767px) {
    width: 250px;
}
`

const Text = styled.div`
font-family: Noto-Regular;
font-size: 13px;
line-height: 18px;

color: #3C3A3A;
margin-bottom: 10px;
@media screen and (max-width: 1279px) {
    font-size: 10px;
    line-height: 15px;
}
@media screen and (max-width: 767px) {
}
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

export default React.memo(ProjectModalSubDescription)
