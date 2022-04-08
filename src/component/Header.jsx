import React from 'react'
import './Header.css'
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined, FileTextOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Header = () => {
    return (
        <div>
            <header className='header-pages'>
                <div className='header-page-top'>
                    <Title style={{ fontWeight: 800, margin: 0 }}>Le Cong Dinh</Title>
                    <Title level={3} style={{ fontWeight: 300, marginTop: 12 }} >Student(Front End Developer)</Title>
                    <p className='feart-p'>I'm a software engineer specialised in frontend and backend development for complex scalable web apps. I write about software development on my blog. Want to know how I may help your project? Check out my project portfolio and online resume.
                    </p>
                    <div>
                        <Link to="" >
                            <Button className='portfolio' icon={<ArrowRightOutlined />}>Views Portfolio</Button>
                        </Link>
                        <Link to="">
                            <Button className='resume' icon={<FileTextOutlined />}>Views Resume</Button>
                        </Link>
                    </div>
                </div>
                <div className='header-page-main'>
                    <img style={{ width: "400px" }} src="https://themes.3rdwavemedia.com/devcard/bs5/1.1/assets/images/profile-lg.jpg" alt="" />
                </div>
            </header>
        </div>
    )
}

export default Header