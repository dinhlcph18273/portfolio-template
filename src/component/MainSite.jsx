import React, { useEffect } from 'react'
import "./Mainsite.css"
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { listskill } from '../features/skill/skillSlice';
const { Title } = Typography;
const style = { padding: '15px 0' };


const MainSite = () => {
    const skill = useSelector(item => item.skill.value)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listskill())
    }, [dispatch])
    return (
        <div className='mainSite'>
            <Title className='name-main' level={2} style={{ fontWeight: 700 }}>What I do</Title>
            <div>
                <p className='introduce'>I have no experience building user interfaces for clients. Here's a quick overview of my key technical skill sets and the technology I use. Want to learn more about my experience? Check out my online resume and project portfolio.</p>
            </div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {skill?.map(item => {
                    return (
                        <Col className="" span={6}>
                            <div style={style}>
                                <img src={`${item.img}`} alt="" />
                                <img src={`${item.img2}`} alt="" />
                                <Title level={5} style={{ padding: "5px 0" }}>{item.name}</Title>
                                <p>{item.desc}</p>
                            </div>
                        </Col>
                    )
                })}

            </Row>
        </div>
    )
}

export default MainSite