import React, { useEffect } from 'react'
import { Row, Col, Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Listproject } from '../features/project/projectSlice';
import { Link } from "react-router-dom"
import { Typography } from 'antd';

const { Title } = Typography;


const ProjectPage = () => {
    const project = useSelector(item => item.project.value)
    const dispatch = useDispatch()
    useEffect(() => {
        const getProject = async () => {
            const { payload } = await dispatch(Listproject())
            console.log(payload);
            return payload
        }
        getProject()
    }, [dispatch])
    return (
        <div >
            <div style={{ margin: "40px 0" }}>
                <header style={{ background: "none", margin: "0 210px", textAlign: "center" }}>
                    <Title>Portfolio</Title>
                    <p style={{ fontWeight: 450, fontSize: 16 }}>Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm taking on freelance work at the moment. Want some help building your software?</p>
                </header>
            </div>
            <div style={{ margin: 50 }}>
                <Row className='project'>
                    {project?.map(item => {
                        return (
                            <Col span={12} className="gutter-row">
                                <Row style={{ overflow: "hidden", height: 200 }}>
                                    <Col span={10}>
                                        <img style={{ width: 213, height: 248 }} src={`${item.img}`} alt="" />
                                    </Col>
                                    <Col span={14} className="desc-box">
                                        <Title level={4} style={{ textDecoration: "underline" }}>{item.name}</Title>
                                        <p>{item.desc}</p>

                                        <span>Client:Google</span>
                                        <Link to={`${item._id}`} ><Button className='views' icon={<EyeOutlined />}>Views Case Study</Button></Link>
                                    </Col>
                                </Row>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default ProjectPage