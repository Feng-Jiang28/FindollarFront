import React, { useState } from 'react';
import { Modal, Form, Input, Button, Checkbox } from 'antd';


//import React from 'react';
//import { Modal, Form, Input, Button } from 'antd';
import { WechatOutlined } from '@ant-design/icons';

const LoginDialog: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);

  const handleOk = (values: any) => {
    console.log('Received values of form: ', values);
    // Here you would handle the login logic, e.g., calling an API.
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const sendVerificationCode = () => {
    // Logic to send the verification code
    console.log('Send verification code');
  };

  return (
    <Modal

      open={isModalVisible}
      onOk={() => handleOk}
      onCancel={handleCancel}
      footer={null}

    >

      <div className="flex">

        <div className="flex flex-col items-center justify-center w-1/2 border-r border-l-gray-100">
          <h1 className="text-xl font-bold mb-4">Findollar</h1>
          <div className="p-2">
            {/*<QrcodeOutlined className="text-3xl" />*/}
            <img src="/img/qrCode.png" alt="Login QR Code" className="w-40 h-40" />
          </div>
          <p className="text-black mt-4">使用 Findollar/微信/QQ 扫码登录</p>
          <Button className="border-none mt-6 inline-flex items-center">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg> */}
            <span>教程</span>
          </Button>

        </div>


        <div className="w-1/2 p-4">
          <h1 className="text-xl font-bold mb-4">手机号登录</h1>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={handleOk}
          >
            <Form.Item
              name="phone"
              rules={[{ required: true, message: '请输入您的手机号码!' }]}
            >
              <Input
                addonBefore="+86"
                placeholder="输入手机号"
              />
            </Form.Item>

            <Form.Item
              name="verification"
              rules={[{ required: true, message: '请输入验证码!' }]}
            >
              <Input
                placeholder="输入验证码"
                suffix={
                  <Button className="p-0 border-none" onClick={sendVerificationCode}>
                    获取验证码
                  </Button>
                }
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="rounded-full bg-black w-full">
                登录
              </Button>
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>我已阅读并同意《用户协议》《隐私政策》
                《儿童/青少年个人信息保护规则》</Checkbox>
            </Form.Item>


          </Form>

          <div className="flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 bg-white">或</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>


          <div className="flex justify-between items-center mt-4">
            <Button icon={<WechatOutlined />} className="rounded-full mr-2">微信登录</Button>
            {/* Replace with actual icon component */}
            <Button className="rounded-full">新用户注册</Button>
          </div>
        </div>
      </div>


    </Modal>
  );
};

export default LoginDialog;
