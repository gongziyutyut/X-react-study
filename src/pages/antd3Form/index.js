import React, { Component } from 'react';
// import {createForm} from 'rc-form'
import createForm from '../../components/my-rc-form'
import Input from '../../components/rcForm/input'
import { Button } from 'antd';


@createForm
class antd3Form extends Component {
  constructor () {
    super()
    this.state = {  
      name: '',
      password: ''
    }
  }
  submit = () => {
    // 埃及
    const {getFieldsValue, validateFieldsValue}  = this.props.form
    validateFieldsValue ((err) => {
      if (err.length) {
        console.log('失败')
      } else {
        console.log('成功')
      }
    })
    console.log(getFieldsValue())
  }
  render() {
    console.log(this.props)
   const {getFieldDecorator}  = this.props.form
   const nameRules = [{required: true, message: 'Please input your username!'}]
   const passwordRules = [{required: true, message: 'Please input your password!'}]
    // const {name, password} = this.state
    return (
      <div>
        {getFieldDecorator("username", {rules: nameRules})(<Input></Input>)}
        {getFieldDecorator('password', {rules: passwordRules})(<Input></Input>)}
        <Button onClick={this.submit}>提交</Button>
      </div>

    );
  }
}
export default antd3Form