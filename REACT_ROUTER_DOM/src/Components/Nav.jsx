import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    const isActiveStyle = { textDecoration: "none", color: 'red' }
    const isNotActive = { textDecoration: 'none', color: 'teal' }
    const Links = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/about',
            title: 'About'
        },
        {
            path: '/login',
            title: 'Login'
        },
        {
            path: '/logout',
            title: 'Logout'
        },
        {
            path: '/user',
            title: 'User'
        },
    ]

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

            {Links.map((el) => {
                return <NavLink key={el.path} to={el.path}>{el.title}</NavLink>
            })}

            {/* <Link to={'/'}>Home</Link>
            <Link to={'about'}>About</Link>
            <Link to={'login'}>Login</Link>
            <Link to={'logout'}>Logout</Link>
            <Link to={'user'}>User</Link>  */}
        </div>
    )
}

export default Nav
