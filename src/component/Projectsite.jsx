import React, { useEffect } from 'react'
import "./Projectsite.css"
import { Row, Col, Button } from 'antd';
import { Typography } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Listproject } from '../features/project/projectSlice';
import { Link } from "react-router-dom"
const { Title } = Typography;
const Projectsite = () => {
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
        <div className='projectsite'>
            <Title className='name-main' level={2} style={{ fontWeight: 700 }}>Projects</Title>
            <div>
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
                                        <Link to={`project/${item._id}`} ><Button className='views' icon={<EyeOutlined />}>Views Case Study</Button></Link>
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

export default Projectsite