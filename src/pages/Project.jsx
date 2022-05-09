import React, { useEffect } from 'react'
import { Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Readproject } from '../features/project/projectSlice';

const { Title } = Typography;


const Project = () => {
    const project = useSelector(item => item.project.value)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(Readproject(id))
    }, [dispatch, id])
    return (

        <div>
            <div style={{ margin: "40px 0" }}>
                <header style={{ background: "none", margin: "0 210px", textAlign: "center" }}>
                    <Title>Case Study: {project.name} </Title>
                    <p style={{ fontWeight: 300, fontSize: 20 }}>Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm taking on freelance work at the moment. Want some help building your software?</p>
                </header>
            </div>
            <div style={{ padding: "60px 40px", }}>
                <div style={{ display: "flex", }} >
                    <img style={{ width: "30%" }} src={`${project.img}`} alt="" />
                    <div style={{ padding: "0 20px" }}>
                        <Title>Client Name</Title>
                        <p >Website: <a href={`${project.website}`} target={`_blank`}>{project.website}</a></p>
                        <p>Size: {project.size}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project