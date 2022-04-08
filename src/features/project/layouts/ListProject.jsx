import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Listproject } from '../projectSlice'
import { Button, Row, Table, Image } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const ListProject = () => {
    const project = useSelector(item => item.project.value)
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
            title: 'Website',
            dataIndex: 'website',
        },
        {
            title: 'Size',
            dataIndex: 'size',
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
        dispatch(Listproject())
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
                dataSource={project}
            />
        </div>
    )
}

export default ListProject