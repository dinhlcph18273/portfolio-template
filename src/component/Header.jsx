import React, { useEffect } from 'react'
import './Header.css'
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined, FileTextOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { readProfile } from '../features/profile/profileSlice';

const { Title } = Typography;

const Header = () => {
    const profile = useSelector(item => item.profile.value)
    const dispatch = useDispatch()
    useEffect(() => {
        const getProfile = async () => {
            const { payload } = await dispatch(readProfile("624e54ac136f289c6556b849"))
            return payload
        }
        getProfile()
    }, [dispatch])

    return (
        <div>
            <header className='header-pages'>
                <div className='header-page-top'>
                    <Title style={{ fontWeight: 800, margin: 0 }}>{profile.name}</Title>
                    <Title level={3} style={{ fontWeight: 300, marginTop: 12 }} >{profile.degree}</Title>
                    <p className='feart-p'>{profile.desc}
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
                    <img style={{ width: "270px", height: "400px" }} src={`${profile.img}`} alt="" />
                </div>
            </header>
        </div>
    )
}

export default Header