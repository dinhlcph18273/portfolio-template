import React from 'react'
import "./Projectsite.css"
import { Row, Col } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;
const Projectsite = () => {
    return (
        <div className='projectsite'>
            <Title className='name-main' level={2} style={{ fontWeight: 700 }}>Projects</Title>
            <div>
                <Row>
                    <Col span={12}>
                        <Row style={{ overflow: "hidden" }}>
                            <Col span={10} style={{ textAlign: "center" }}>
                                <img style={{ width: 213, height: 248 }} src="https://themes.3rdwavemedia.com/devcard/bs5/1.1/assets/images/project/project-1.jpg" alt="" />
                            </Col>
                            <Col span={14}>
                                <Title level={4} style={{ textDecoration: "underline" }}>Project</Title>
                                <p>Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row>
                            <Col span={12}>img</Col>
                            <Col span={12}>title</Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row>
                            <Col span={12}>img</Col>
                            <Col span={12}>title</Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row>
                            <Col span={12}>img</Col>
                            <Col span={12}>title</Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Projectsite