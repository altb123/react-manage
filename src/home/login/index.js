import { useState } from "react";
import './index.scss';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate();
    const [submitLoading, setSubmitLoading] = useState(false); // 登录按钮loading开关

    // 点击登录按钮触发
    const handleSubmit = () => {
        setSubmitLoading(true);
    };

    const onFinish = (values) => {  
        const { username } = values;
        setTimeout(() => {
            setSubmitLoading(false);
            message.success('登录成功');
            setUseInfo(username);
            navigate('/');
        }, 1000);
    };

    const setUseInfo = (userName) => {
        const obj = {
            userName: userName || '鲁班七号',
            userImg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-a3ce9a3fcb61be02081bae5b15c5da12_r.jpg%3Fsource%3D1940ef5c&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658043434&t=ab2374a136168eb1828e0d49ac4168a7',
            userRole: '超级管理员',
            upDateTime: '2022-06-23',
            upDateAddress: '广东省佛山市'
        }
        sessionStorage.setItem('useInfo', JSON.stringify(obj));
    };

    const onFinishFailed = (errorInfo) => {
            setSubmitLoading(false);
            message.error(errorInfo.errorFields[0].errors[0]);
    };

    return (
        <>
            <div className="login-box">
                <div className="detail">
                    <div className="detail-title">后台管理系统</div>

                    {/* 表单内容 */}
                    <Form
                        name="basic"
                        className="login-form"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off">
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={submitLoading}
                                onClick={() => handleSubmit()}>
                                登录
                            </Button>
                            <p>{submitLoading}</p>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login;