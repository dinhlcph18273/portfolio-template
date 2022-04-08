import React from 'react'
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */
const AddProfile = () => {
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <div>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name='name' label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='email' label="Email" rules={[{ type: 'email', required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='age' label="Age" rules={[{ type: 'number', min: 0, max: 99, required: true }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item name='birthday' label="Birthday" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='img' label="Image" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='phone' label="Phone" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='degree' label="Degree" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='adress' label="Adress" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='desc' label="Desc" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProfile