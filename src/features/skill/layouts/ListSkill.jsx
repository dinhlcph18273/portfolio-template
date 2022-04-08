import React, { useEffect } from 'react'
import { Button, Row, Table, Image } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listskill } from '../skillSlice';

const ListSkill = () => {
    const skill = useSelector(item => item.skill.value)
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <h3>{text}</h3>,
        },
        {
            title: 'Img',
            dataIndex: 'img',
            render: (text) => <Image
                width={200}
                height={200}
                src={text}

            />,
        },
        {
            title: 'Desc',
            dataIndex: 'desc',
        },
        {
            title: 'Action',
            dataIndex: '_id',
            render: (id) => (
                <Row>
                    <Link className='edit-to' to={`/admin/category/${id}/edit`}>
                        <Button type="primary" icon={<EditOutlined />}></Button>
                    </Link>
                    <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => {
                        const confirm = window.confirm("muốn xóa không?")
                        if (confirm) {
                            dispatch()
                        }
                    }}>
                    </Button>
                </Row>
            )
        },
    ];
    useEffect(() => {
        dispatch(listskill())
    }, [dispatch])
    return (
        <div>
            <Row>
                <Link to="/admin/category/add">
                    <Button type='primary' className='submit-to' > Add </Button>
                </Link>
            </Row>
            <Table
                columns={columns}
                dataSource={skill}
            />
        </div>
    )
}

export default ListSkill