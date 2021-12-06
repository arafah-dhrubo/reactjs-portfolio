import React from 'react'
import About from './About/About'
import Banner from './Banner/Banner'
import Project from './Projects/Project'

const Home = () => {
    return (
        <div>
            <h1 className="bg-purple-600">This is home page</h1>
            <Banner></Banner>
            <About></About>
          <Project></Project>  
        </div>
    )
}

export default Home
