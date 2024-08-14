import React from 'react'
import { Button, Form, Input } from "antd";
import animateSignup from '../../../assets/animateSignup.png'
import { MdMailOutline } from "react-icons/md";
import { FaRegUser } from 'react-icons/fa';
import { LiaUserLockSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export default function SignUpForm() {

    return (
        <div className='h-screen absolute w-screen sm:bg-stone-100'>
            <div className="bg-sky-blue m-auto flex justify-center items-center h-screen sm:w-fit sm:h-auto sm:absolute inset-x-0 top-32 sm:rounded-lg">
                <div className="flex flex-col justify-center items-center w-screen sm:w-96 h-auto">
                    <div className='mb-4 mt-5 text-4xl font-bold sm:font-semibold sm:text-3xl'>
                        <h1>Sign up</h1>
                    </div>
                    <div className=" w-screen px-4 sm:w-96">
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Enter username!',
                                    },
                                ]}>
                                <div>
                                    <Input type="text" placeholder="Username" size='large' prefix={<FaRegUser className='text-sm' />} />
                                </div>
                            </Form.Item>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        type: 'email',
                                        message: 'Please Enter Email!',
                                    },
                                ]}>
                                <div>
                                    <Input type="email" placeholder="Enter Email" size='large' prefix={<MdMailOutline />} />
                                </div>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Enter Password!',
                                    },
                                ]}>
                                <div>
                                    <Input.Password placeholder="Enter password" size='large' prefix={<LiaUserLockSolid />} />
                                </div>
                            </Form.Item>
                            <Form.Item
                                name="confirmpassword"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Confirm Password!',
                                    },
                                ]}>
                                <div>
                                    <Input.Password placeholder="Confirm Password" size='large' prefix={<LiaUserLockSolid />} />
                                </div>
                            </Form.Item>
                            <div>
                                <span className='text-gray-600'>Already have an account ? </span>
                                <Link to={'/login'}><span className='font-semibold hover:underline hover:font-bold'>Login</span></Link>
                            </div>

                            <div className='mb-5 mt-4'>
                                <Button type='text' className='border-black font-bold' htmlType="submit">Register</Button>
                            </div>

                        </Form >
                    </div>
                </div>
                <div className="sm:visible">
                    <img
                        className='w-96'
                        src={animateSignup}
                        alt=""
                    />
                </div>
            </div>
        </div >
    )
}
