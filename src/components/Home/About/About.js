import React from 'react'
import dhrubo from '../../../assets/images/dhrubo.png'
import { BiRightArrow } from 'react-icons/bi';
const About = () => {
    return (
        <div className="bg-gray-800 text-green-300 py-20">
            <div className="">
                <div className="container items-center flex md:flex-row flex-col w-11/12 md:w-3/4 mx-auto">
                    <div className="w-full">
                        <div className="flex mb-5 items-center h-auto">
                            <p className="font-bold text-xl m-0 p-0">
                                <span className="mr-5">0.1</span>
                                About Me
                            </p>
                            <hr className="bg-green-100 w-2/4 ml-5" />
                        </div>
                        <p className="text-lg text-justify pr-20 ">
                            Hello! My name is Samiul Arafah Dhrubo and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try editing custom wordpress themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!

                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <div className="flex justify-between w-3/4 mt-2"><ul>
                            <li class="flex items-center mb-2"><BiRightArrow/>JavaScript (ES6+)</li>
                            <li class="flex items-center mb-2"><BiRightArrow/>TypeScript</li>
                            <li class="flex items-center mb-2"><BiRightArrow/>Reactjs</li>
                            <li class="flex items-center mb-2"><BiRightArrow/>React Native</li>
                        </ul>
                            <ul>
                                <li class="flex items-center mb-2"><BiRightArrow/>Laravel</li>
                                <li class="flex items-center mb-2"><BiRightArrow/>Django</li>
                                <li class="flex items-center mb-2"><BiRightArrow/>Node.js</li>
                                <li class="flex items-center mb-2"><BiRightArrow/>WordPress</li>
                            </ul></div>
                    </div>
                    <div className="mt-5 mb:mt-0">
                        <img src={dhrubo} alt="Samiul Arafah Dhrubo" />
                    </div>
               </div>
            </div>
        </div>
    )
}

export default About
