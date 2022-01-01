import React from 'react'
import styled from 'styled-components'
import PageTitle from '../atoms/PageTitle'

const Header = styled.div`
padding-top: 54px;
margin-left: 100px;
`

function TemplateHeader({children}) {
    return (
        <Header>
            <PageTitle children={children}/>
        </Header>
    )
}

export default TemplateHeader