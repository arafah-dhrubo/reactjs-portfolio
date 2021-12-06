import React from 'react'
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className="bg-gray-800 text-green-300">
            <div className="container flex items-left justify-center py-20 flex-col">
                <div className="w-11/12 md:w-3/4 mx-auto">
                <p className="font-bold">Hi! my name is</p>
                <h1 className="text-6xl mb-3 font-bold text-green-100">Samiul Arafah Dhrubo</h1>
                <h1 className="text-5xl mb-3 font-bold text-green-400">I build things for the web</h1>
                    <p className="text-2xl mb-5 w-11/12">I'm a passionate software engineer specializing in fullstack development(MERN). Currently exploring React Native and Nextjs.<Typewriter
                        options={{
                            strings: ['.', '..', '...'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></p>
                    <button className="border-green-500  border px-6 py-3">Check My Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
