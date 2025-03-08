import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/nav/Nav'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import InfoAbout from '../components/info/InfoAbout'

const HomeLayout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}

export default HomeLayout