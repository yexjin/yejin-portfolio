import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
font-size: 100px;
`
function ModalContents({project}) {
    return (
        <Text>
            {project.title}
        </Text>
    )
}

export default ModalContents
