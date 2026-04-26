import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Page/Home.jsx';
import About from '../Page/About.jsx';

const AllRoutes = () => {

    const Home = () => {
        return <h1>Home Pageeeee</h1>
    }

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<h1>Login Page</h1>} />
            <Route path='/logout' element={<h1>Logout Page</h1>} />
            <Route path='/user' element={<h1>User Page</h1>} />
        </Routes>
    )
}

export default AllRoutes;
