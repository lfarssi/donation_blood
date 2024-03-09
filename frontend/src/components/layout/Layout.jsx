import React from 'react'
import Header from './Header'
import Sider from './Sider'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <Header />
            <div className='d-flex'>
            <Sider />
            <main className='d-inline-block w-100'>
                <Outlet/>
            </main>
            </div>
        </div>
    )
}
