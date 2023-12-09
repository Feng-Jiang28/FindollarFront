import React, { useState } from 'react';
import { Modal, Input, Button, Checkbox, Divider } from 'antd';
import { WechatOutlined } from '@ant-design/icons';

const LoginModal: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleOk = () => {
    // Handle the click event for the OK button
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title={<div className="text-center">手机号登录</div>}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <div className="space-y-4">
        <Input
          size="large"
          addonBefore="+86"
          placeholder="请输入手机号"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input
          size="large"
          placeholder="请输入验证码"
          suffix={
            <Button
              className="border-none"
              onClick={() => {
                /* trigger verification code sending */
              }}
            >
              获取验证码
            </Button>
          }
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <Button type="primary" block danger onClick={handleOk} shape="round">
          登录
        </Button>
        <Checkbox className="text-gray-500">
          我已阅读并同意《用户协议》《隐私政策》《儿童/青少年个人信息保护规则》
        </Checkbox>
        <Divider><span className="text-gray-500">或</span></Divider>
        <div className="flex justify-between">
          <Button
            className="flex-grow mr-2"
            shape="round"
            onClick={() => {
              /* WeChat login logic */
            }}
          >
            <WechatOutlined className="text-green-500"/>微信登录
          </Button>
          <Button
            className="flex-grow ml-2"
            shape="round"
            onClick={() => {
              /* New user registration logic */
            }}
          >
            新用户注册
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
