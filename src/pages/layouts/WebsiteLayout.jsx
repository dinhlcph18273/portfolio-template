import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd';
import "./WebsiteLayout.css"
import Nav from '../../component/Nav';

const WebsiteLayout = () => {
    return (
        <div>
            <Layout className='container'>
                <div className='nav-layout'>
                    <Nav />
                </div>
                <div>
                    <Outlet />
                </div>
            </Layout>
        </div >
    )
}

export default WebsiteLayout