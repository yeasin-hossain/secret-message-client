/* eslint-disable no-shadow */
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';

function Welcome() {
    return (
        <div className="container">
            <h1>Welcome</h1>
            <Input placeholder="Basic usage" />
            <Space direction="vertical">
                <Input.Password placeholder="input password" />
                <Input.Password
                    placeholder="input password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Space>
        </div>
    );
}

export default Welcome;
