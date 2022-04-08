/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { DesktopOutlined, FacebookFilled, FileTextOutlined, GithubFilled, InstagramFilled, UserOutlined } from '@ant-design/icons';
import "./Nav.css"


const Nav = () => {
    return (
        <div>
            <div style={{ padding: 16 }}>
                <div className='header-top'>
                    <h1><Link to="" style={{ color: 'white', fontWeight: 800 }}>Le Cong Dinh</Link></h1>
                    <img src="https://themes.3rdwavemedia.com/devcard/bs5/1.1/assets/images/profile.png" alt="image"></img>
                    <p style={{ color: 'white', padding: 10 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ipsum explicabo expedita</p>
                    <ul className='menu'>
                        <li><Link to=""><Button icon={<InstagramFilled />} ></Button> </Link></li>
                        <li><Link to=""><Button icon={<GithubFilled />} ></Button> </Link></li>
                        <li><Link to=""><Button icon={<FacebookFilled />} ></Button> </Link></li>
                    </ul>
                </div>
                <div className='main'>
                    <ul className='menu-main'>
                        <li><Link to=""><UserOutlined /> About Me</Link></li>
                        <li><Link to=""><DesktopOutlined /> Portfolio</Link></li>
                        <li><Link to=""><FileTextOutlined /> Resume</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav