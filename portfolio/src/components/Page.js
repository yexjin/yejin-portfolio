import React from 'react'
import Banner from './templates/Banner'
import AboutMe from './templates/AboutMe'
import Archiving from './templates/Archiving'
import Skills from './templates/Skills'
import Projects from './templates/Projects'
import Contact from './templates/Contact'
import styled from 'styled-components'


function Page() {

    return (
        <>
            <div id='Banner'>
                <Banner />
            </div>
            <div id='AboutMe'>
                <AboutMe />
            </div>
            <div id='Archiving'>
                <Archiving />
            </div>
            <div id='Skills'>
                <Skills />
            </div>
            <div id='Projects'>
                <Projects />
            </div>
            <div id='Contact'>
                <Contact />
            </div>
        </>
    )
}

export default Page
