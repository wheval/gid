import React from 'react'
import Hero from './components/Hero'
import AboutChainUp from './components/AboutChainUp'
import EventsSchedule from './components/EventsSchedule'
import Partners from './components/Partners'
import Footer from '@/components/Footer'

const ChainUp = () => {
    return (
        <div>
            <Hero />
            <AboutChainUp />
            <EventsSchedule />
            <Partners />
            <Footer />
        </div>
    )
}

export default ChainUp