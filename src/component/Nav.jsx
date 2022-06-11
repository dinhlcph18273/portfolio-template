/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { DesktopOutlined, FacebookFilled, FileTextOutlined, GithubFilled, InstagramFilled, UserOutlined } from '@ant-design/icons';
import "./Nav.css"


const Nav = () => {
    return (
        <div className='nav'>
            <div style={{ padding: 16 }}>
                <div className='header-top'>
                    <h1><Link to="" style={{ color: 'white', fontWeight: 800 }}>Le Cong Dinh</Link></h1>
                    <img src="https://res.cloudinary.com/dinhlcph18273/image/upload/v1654967495/153620650_1259363304459853_3632080232479997762_n_odxwfa.png" width={200} height={200} alt="image"></img>
                    <p style={{ color: 'white', padding: 10 }}>Hi, my name is Dinh and I'm a front end developer. Welcome to my personal website!</p>
                    <ul className='menu'>
                        <li><a target={`_blank`} href="https://www.instagram.com/polyintel/"><Button icon={<InstagramFilled />} ></Button> </a></li>
                        <li><a target={`_blank`} href="https://github.com/dinhlcph18273"><Button icon={<GithubFilled />} ></Button> </a></li>
                        <li><a target={`_blank`} href="https://www.facebook.com/phaiho.ko"><Button icon={<FacebookFilled />} ></Button> </a></li>
                    </ul>
                </div>
                <div className='main'>
                    <ul className='menu-main'>
                        <li><Link to="/"><UserOutlined /> About Me</Link></li>
                        <li><Link to="project"><DesktopOutlined /> Portfolio</Link></li>
                        <li><Link to="resume"><FileTextOutlined /> Resume</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav