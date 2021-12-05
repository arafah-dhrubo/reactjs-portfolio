import React from 'react'
import About from './About/About'
import Banner from './Banner/Banner'
import Project from './Projects/Project'

const Home = () => {
    return (
        <div>
            This is home page
            <Banner></Banner>
            <About></About>
          <Project></Project>  
        </div>
    )
}

export default Home
