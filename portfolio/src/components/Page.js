import React from 'react'
import Header from './templates/Header'
import Banner from './templates/Banner'
import AboutMe from './templates/AboutMe'
import Archiving from './templates/Archiving'
import Skills from './templates/Skills'
import Projects from './templates/Projects'
import Activity from './templates/Activity'
import Contact from './templates/Contact'

function Page() {
    return (
        <>
            <Header />
            <Banner />
            <AboutMe />
            <Archiving />
            <Skills />
            <Projects />
            <Activity />
            <Contact />
        </>
    )
}

export default Page
