import React, {Component} from 'react';
import {Button} from 'antd'
import {Form, Field} from '../../components/rcForm'
import Input from '../../components/rcForm/input'
// const FormItem = Form.Item
export default class AntdPage extends Component {
  
  constructor () {
    super()
    this.state = {
      a: 1
    }
    this.formRef = React.createRef()
  }
  componentDidMount() {
    //this.formRef.setFieldsValue({username: '333333'})
  }
  onFinishFailed = (val) => {
    console.log(this.state);
    
    console.log(val, '失败')
  }
  onFinish = (val) => {
    console.log(val, '成功');
  }
  render() {
    return (
      <div> 
        textInComponent
        <Form>
          <Field 
            label="姓名" 
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Field> 
          <Field 
            label="密码" 
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input />
          </Field> 
          <Field>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Field>
        </Form>  
      </div>
    );
  }
}
/* export default function AntdPage()  {
  const [form] = Form.useForm()
  const onFinish = (val) => {
    console.log(val, '成功')
  }
  const onFinishFailed = (val) => {
    console.log(val, '失败')
  }
  useEffect(() => {
    console.log('form', form)
    form.setFieldsValue({username: '333333'})
    form.setFieldsValue({password: '333333'})
  }, [form])
  return (
    <div> 
      textInComponent
      <Form
        form = {form}
        onFinishFailed = {onFinishFailed}
        onFinish = {onFinish}>
        <FormItem 
          label="姓名" 
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </FormItem> 
        <FormItem 
          label="密码" 
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input />
        </FormItem> 
        <FormItem>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </FormItem>
      </Form>  
    </div>
  );
} */
