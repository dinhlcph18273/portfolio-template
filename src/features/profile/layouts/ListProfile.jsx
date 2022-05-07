import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProfile, removeProfile } from '../profileSlice'
import { Button, Row, Table, Image } from 'antd';
import { Link } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';


const ListProfile = () => {
    const profile = useSelector((item, index) => item.profile.value)
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <h3>{text}</h3>,
        },
        {
            title: 'age',
            dataIndex: 'age',
        },
        {
            title: 'birthday',
            dataIndex: 'birthday',
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
            title: 'phone',
            dataIndex: 'phone',
        },
        {
            title: 'email',
            dataIndex: 'email',
        },
        {
            title: 'adress',
            dataIndex: 'adress',
        },
        {
            title: 'degree',
            dataIndex: 'degree',
        },
        {
            title: 'desc',
            dataIndex: 'desc',
        },
        {
            title: 'exp',
            dataIndex: 'exp',
        },
        {
            title: 'Action',
            dataIndex: '_id',
            render: (id) => (
                <Row>
                    <Link className='edit-to' to={`/admin/profile/${id}/edit`}>
                        <Button type="primary" icon={<EditOutlined />}></Button>
                    </Link>
                    <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => {
                        const confirm = window.confirm("muốn xóa không?")
                        if (confirm) {
                            dispatch(removeProfile(id))
                        }
                    }}>
                    </Button>
                </Row>
            )
        },
    ];
    useEffect(() => {
        dispatch(listProfile())
    }, [dispatch])
    return (
        <div>
            <Row>
                <Link to="/admin/profile/add">
                    <Button type='primary' className='submit-to' > Add </Button>
                </Link>
            </Row>
            <Table
                columns={columns}
                dataSource={profile}
            />
        </div>
    )
}

export default ListProfile