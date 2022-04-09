import React from 'react'
import "./Projectsite.css"
import { Row, Col, Button } from 'antd';
import { Typography } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
const { Title } = Typography;
const Projectsite = () => {
    return (
        <div className='projectsite'>
            <Title className='name-main' level={2} style={{ fontWeight: 700 }}>Projects</Title>
            <div>
                <Row className='project'>
                    <Col span={12} className="gutter-row">
                        <Row style={{ overflow: "hidden", height: 200 }}>
                            <Col span={10}>
                                <img style={{ width: 213, height: 248 }} src="https://themes.3rdwavemedia.com/devcard/bs5/1.1/assets/images/project/project-1.jpg" alt="" />
                            </Col>
                            <Col span={14} className="desc-box">
                                <Title level={4} style={{ textDecoration: "underline" }}>Project</Title>
                                <p>Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.</p>

                                <span>Client:Google</span>
                                <Button className='views' icon={<EyeOutlined />}>Views Case Study</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} className="gutter-row">
                        <Row style={{ overflow: "hidden", height: 200 }}>
                            <Col span={10}>
                                <img style={{ width: 213, height: 248 }} src="https://themes.3rdwavemedia.com/devcard/bs5/1.1/assets/images/project/project-1.jpg" alt="" />
                            </Col>
                            <Col span={14} className="desc-box">
                                <Title level={4} style={{ textDecoration: "underline" }}>Project</Title>
                                <p>Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.</p>

                                <span>Client:Google</span>
                                <Button className='views' icon={<EyeOutlined />}>Views Case Study</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} className="gutter-row">
                        <Row style={{ overflow: "hidden", height: 200 }}>
                            <Col span={10}>
                                <img style={{ width: 213, height: 248 }} src="https://themes.3rdwavemedia.com/devcard/bs5/1.1/assets/images/project/project-1.jpg" alt="" />
                            </Col>
                            <Col span={14} className="desc-box">
                                <Title level={4} style={{ textDecoration: "underline" }}>Project</Title>
                                <p>Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.</p>

                                <span>Client:Google</span>
                                <Button className='views' icon={<EyeOutlined />}>Views Case Study</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} className="gutter-row">
                        <Row style={{ overflow: "hidden", height: 200 }}>
                            <Col span={10}>
                                <img style={{ width: 213, height: 248 }} src="https://themes.3rdwavemedia.com/devcard/bs5/1.1/assets/images/project/project-1.jpg" alt="" />
                            </Col>
                            <Col span={14} className="desc-box">
                                <Title level={4} style={{ textDecoration: "underline" }}>Project</Title>
                                <p>Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.</p>

                                <span>Client:Google</span>
                                <Button className='views' icon={<EyeOutlined />}>Views Case Study</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Projectsite