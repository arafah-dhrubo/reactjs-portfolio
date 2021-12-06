import React from 'react'
import { BiRightArrow } from 'react-icons/bi';
import {
    Timeline,
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
} from 'vertical-timeline-component-react';
const customTheme = {
    yearColor: '#6ee7b7',
    lineColor: '#d0cdc4',
    dotColor: '#262626',
    borderDotColor: '#d0cdc4',
    titleColor: '#6ee7b7',
    subtitleColor: '#bf9765',
    textColor: '#6ee7b7',
};
const Experience = () => {
    return (
        <div className="bg-gray-800 text-green-300 py-20">
            <div className="container items-center flex md:flex-row flex-col w-11/12 md:w-3/4 mx-auto">
                <div className="w-full">
                    <div className="flex mb-5 items-center h-auto">
                        <p className="font-bold text-xl m-0 p-0">
                            <span className="mr-5">0.2</span>
                            Experince
                        </p>
                        <hr className="bg-green-100 w-2/4 ml-5" />
                    </div>
                    <Timeline theme={customTheme} dateFormat='ll'>
                        <Container>
                            <YearContent startDate='2021/10/20' currentYear />
                            <BodyContent>
                                <Section title='Laravel Internship'>
                                    <Description variant='subtitle' text='Got internship as a laravel developer' />
                                    <div className="flex items-center"><BiRightArrow className="mr-2"/><Description text='Going through various kinds of laravel topics.' /></div>
                                    <div className="flex items-center"><BiRightArrow className="mr-2"/><Description text='Exploring php cms such as wordpress, joomla' /></div>
                                </Section>

                                <Section title=''>
                                   
                                </Section>
                            </BodyContent>
                        </Container>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}

export default Experience
