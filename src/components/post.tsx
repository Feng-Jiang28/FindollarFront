import React from 'react';
import { Form, Input, Button, Upload, DatePicker, Select, Radio } from 'antd';
import { UploadOutlined } from '@ant-design/icons';



const { TextArea } = Input;
const { Option } = Select;

const Post = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form Values:', values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onCancel = () => {
    // Perform any additional actions on cancel, such as navigating back
    onReset(); // Resets the form fields
    message.info('Form reset'); // Display a message to the user
  };

  return (
    <div className="App">
      <div className="flex items-center mb-4"> {/* Container for the title with the blue tag */}
        <span className="w-2 h-8 bg-blue-500 mr-2"></span> {/* Blue tag */}
        <h1 className="text-xl font-bold">发布图文</h1> {/* Title */}
      </div>
      <Form
        form={form}
        name="publishForm"
        onFinish={onFinish}
        className="m-4 p-10 bg-white rounded shadow-xl"
      >
        <Form.Item
          name="upload"
          label="上传图片"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            // Convert AntD's Upload event to a file list
            return e.fileList;
          }}
          className="mb-4"
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="title"
          label="填写标题"
          rules={[{ required: true, message: '请输入标题!' }]}
          className="mb-4"
        >
          <Input placeholder="请输入标题" />
        </Form.Item>

        <Form.Item
          name="description"
          label="填写更全面的描述信息"
          rules={[{ required: true, message: '请输入描述信息!' }]}
          className="mb-4"
        >
          <TextArea rows={4} placeholder="请输入描述信息" />
        </Form.Item>

        <Form.Item
          name="location"
          label="添加地点"
          className="mb-4"
        >
          <Input placeholder="请输入地点" />
        </Form.Item>

        <Form.Item
          name="visibility"
          label="权限设置"
          className="mb-4"
        >
          <Radio.Group>
            <Radio value="public">公开<span className="text-gray-500">(所有人可见)</span></Radio>
            <Radio value="private">私密<span className="text-gray-500">(仅自己可见)</span></Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="publishTime"
          label="发布时间"
          className="mb-4"
        >
          <Radio.Group>
            <Radio value="now">立即发布</Radio>
            <Radio value="schedule">定时发布</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <div className="flex  space-x-2">
            <Button type="primary" htmlType="submit" danger>
              发布
            </Button>
            <Button htmlType="button" onClick={onCancel} danger>
              取消
            </Button>
          </div>
        </Form.Item>

      </Form>
    </div>
  );
};

export default Post;
