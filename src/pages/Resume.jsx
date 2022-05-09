import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readProfile } from "../features/profile/profileSlice"
import { Button, Typography } from 'antd';
import { AimOutlined, MailFilled, PhoneFilled } from '@ant-design/icons';
import { listskill } from '../features/skill/skillSlice';

const { Title } = Typography;

const Resume = () => {
    const profile = useSelector(item => item.profile.value)
    const skill = useSelector(item => item.skill.value)
    console.log(skill);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readProfile("62773f89a690b37600abb5bc"))
        dispatch(listskill())
    }, [dispatch])
    return (
        <div style={{ margin: 50 }}>
            <Title style={{ textAlign: "center", marginBottom: 100 }}>Online Resume</Title>
            <div style={{ padding: 50, background: "#fff" }}>
                <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 10, borderBottom: "1px solid black" }}>
                    <div>
                        <Title style={{ color: "#5bc3d5", fontSize: 45, fontWeight: 800 }}>{profile.name}</Title>
                        <Title level={5}>{profile.degree}</Title>
                    </div>
                    <div style={{ borderLeft: "1px solid gray" }}>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            <li><Button style={{ border: "none", background: "none" }} icon={<PhoneFilled />}>  0{profile.phone}</Button></li>
                            <li><Button style={{ border: "none", background: "none" }} icon={<MailFilled />}>{profile.email}</Button></li>
                            <li><Button style={{ border: "none", background: "none" }} icon={<AimOutlined />}>{profile.adress}</Button></li>
                        </ul>
                    </div>
                </div>
                <div style={{ padding: "20px", borderBottom: "1px solid black" }}>
                    <img src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/278979470_716705392853562_1086265818398991727_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=zNIBLmbQYZsAX8yR5Xu&tn=ZtNM5bzHUEq2g-oy&_nc_ht=scontent.fhan3-5.fna&oh=03_AVK3eZM7tvQfZm34SHNk4e-dToX-k-RXknhns7zLdlR56Q&oe=62989372" width={150} height={150} alt="image"></img>
                </div>
                <div style={{ display: "flex", marginTop: 20, justifyContent: "space-between" }}>
                    <div>
                        <Title className='name-main' level={4} style={{ fontWeight: 700, color: "#5bc3d5" }}>WORK EXPERIENCES</Title>
                    </div>
                    <div >
                        <div>
                            <Title className='name-main' level={4} style={{ fontWeight: 700, color: "#5bc3d5" }}>SKILLS</Title>
                            {skill?.map(item => {
                                return (
                                    <p style={{ paddingTop: 10 }}><img src={`${item.img}`} alt="" />{item.name}</p>
                                )
                            })}
                        </div>
                        <div>
                            <Title className='name-main' level={4} style={{ fontWeight: 700, color: "#5bc3d5" }}>EDUCATION</Title>
                            <p>FPT PolyTechnich</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume