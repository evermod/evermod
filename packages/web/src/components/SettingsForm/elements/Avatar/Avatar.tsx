import React, { useState } from 'react'

import { Form, Upload, message, Button, Row, Col } from 'antd'
import ImgCrop from 'antd-img-crop'

import { LoadingOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons'
const { Item } = Form

// eslint-disable-next-line max-lines-per-function
const Avatar = () => {
  const [loading] = useState(false)

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  )

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
  }

  // eslint-disable-next-line max-lines-per-function
  const Customized: React.FC<{ value?: any, onChange?: any }> = ({ value, onChange }) => {
    const handleChange = async (v) => {
      console.log('Upload event:', v)
      if (!v.file) return
      const src = await new Promise(resolve => {
        const reader = new FileReader()
        reader.readAsDataURL(v.file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
      onChange(src)
    }

    const imageURL = value

    return <Row>
      <Col>
        <ImgCrop>
          <Upload
            name="photoURL"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageURL ? <img src={imageURL} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
        </ImgCrop>
      </Col>
      <Col>
        { imageURL && <Button type="primary" shape="circle" icon={<DeleteOutlined />} onClick={() => onChange(null)} /> }
      </Col>
    </Row>
  }

  return <Item name="photoURL" label="Avatar">
    <Customized />
  </Item>
}

// {imageURL ? <img src={imageURL} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
export default Avatar
