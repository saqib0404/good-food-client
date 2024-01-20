import React from 'react'
import Header from '../pages/Shared/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Shared/Footer/Footer'
import { Container } from 'react-bootstrap'

const Main = () => {
    return (
        <Container 
        style={{"backgroundColor": "#f7ebeb"}}
        >
            <Header /><hr /><hr />
            <Outlet />
            <Footer />
        </Container>
    )
}

export default Main