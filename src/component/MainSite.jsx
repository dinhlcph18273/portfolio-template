import React from 'react'
import "./Mainsite.css"
import { Row, Col } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;
const style = { padding: '8px 0' };


const MainSite = () => {
    return (
        <div className='mainSite'>
            <Title className='name-main' level={2} style={{ fontWeight: 700 }}>What I do</Title>
            <div>
                <p className='introduce'>I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
            </div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/274904408_1008316553392510_8374122056556994233_n.png?stp=cp0_dst-png&_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=f02QMBTdyxYAX9GdpMS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI9-LDvOG2D1g4Z25nj2jTZJKe0ySpa2g8YGieP2Ny6SQ&oe=627503B1" alt="" />
                        <Title level={5} style={{ padding: "5px 0" }}>Vanilla JavaScript</Title>
                        <p>List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/274904408_1008316553392510_8374122056556994233_n.png?stp=cp0_dst-png&_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=f02QMBTdyxYAX9GdpMS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI9-LDvOG2D1g4Z25nj2jTZJKe0ySpa2g8YGieP2Ny6SQ&oe=627503B1" alt="" />
                        <Title level={5} style={{ padding: "5px 0" }}>Vanilla JavaScript</Title>
                        <p>List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/274904408_1008316553392510_8374122056556994233_n.png?stp=cp0_dst-png&_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=f02QMBTdyxYAX9GdpMS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI9-LDvOG2D1g4Z25nj2jTZJKe0ySpa2g8YGieP2Ny6SQ&oe=627503B1" alt="" />
                        <Title level={5} style={{ padding: "5px 0" }}>Vanilla JavaScript</Title>
                        <p>List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>
                        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/274904408_1008316553392510_8374122056556994233_n.png?stp=cp0_dst-png&_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=f02QMBTdyxYAX9GdpMS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI9-LDvOG2D1g4Z25nj2jTZJKe0ySpa2g8YGieP2Ny6SQ&oe=627503B1" alt="" />
                        <Title level={5} style={{ padding: "5px 0" }}>Vanilla JavaScript</Title>
                        <p>List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MainSite