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
                    <img src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/278979470_716705392853562_1086265818398991727_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=zNIBLmbQYZsAX8yR5Xu&tn=ZtNM5bzHUEq2g-oy&_nc_ht=scontent.fhan3-5.fna&oh=03_AVK3eZM7tvQfZm34SHNk4e-dToX-k-RXknhns7zLdlR56Q&oe=62989372" width={200} height={200} alt="image"></img>
                    <p style={{ color: 'white', padding: 10 }}>Hi, my name is Dinh and I'm a front end developer. Welcome to my personal website!</p>
                    <ul className='menu'>
                        <li><a target={`_blank`} href="https://www.instagram.com/polyintel/"><Button icon={<InstagramFilled />} ></Button> </a></li>
                        <li><a target={`_blank`} href="https://github.com/dinhlcph18273"><Button icon={<GithubFilled />} ></Button> </a></li>
                        <li><a target={`_blank`} href="https://www.facebook.com/phaiho.ko"><Button icon={<FacebookFilled />} ></Button> </a></li>
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