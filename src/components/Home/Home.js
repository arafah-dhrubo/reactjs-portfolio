import React from 'react'
import About from './About/About'
import Banner from './Banner/Banner'
import Experience from './Experience/Experience'
import Project from './Projects/Project'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Experience/>
          <Project></Project>  
        </div>
    )
}

export default Home
