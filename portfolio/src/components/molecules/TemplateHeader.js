import React from 'react'
import styled from 'styled-components'
import PageTitle from '../atoms/PageTitle'

const Header = styled.div`
padding-top: 54px;
margin-left: 100px;
@media screen and (max-width: 1279px) {
    margin-left: 65px;
  }
@media screen and (max-width: 767px) {
    margin-left: 31px;
    padding-top: 30px;
}
`

function TemplateHeader({children}) {
    return (
        <Header data-aos="fade-up"  data-aos-duration="1000" >
            <PageTitle children={children}/>
        </Header>
    )
}

export default TemplateHeader
