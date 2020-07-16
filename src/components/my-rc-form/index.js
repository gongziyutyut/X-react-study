import React, { Component } from 'react';

const creatForm = (Comps) => {
  return ( 
    class extends Component {
      constructor () {
        super()
        this.state = {}
        this.options = {}
      }
      getFieldDecorator = (field, rules) => (comp) => {
        const newComp = React.cloneElement(comp, {
          name: field,
          value: this.state[field] || '',
          onChange: this.handleChange,
        })
        this.options[field] = rules
        return newComp
      }
      handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
      }
      setFieldValue = (obj) => {
        this.setState(obj)
      }
      getForm = () => {
        return {
          getFieldDecorator: this.getFieldDecorator,
          setFieldValue: this.setFieldValue,
          getFieldsValue: this.getFieldsValue,
          validateFieldsValue: this.validateFieldsValue
        }
      }
      getFieldsValue = () => {
        return this.state
      }
      validateFieldsValue = (callback) => {
        let err = []
        for (let key in this.options) {
          const {rules} = this.options[key]
          const rule = rules[0]
          const value = this.state[key]
          if (rule && rule.required && !value) {
            err.push({
              err: rule.message,
              value
            })
          }
        }
        callback && callback(err)
      }
      render () {
        return (
          <Comps {...this.props} form = {this.getForm()}></Comps>
        )
      }
    }
  );
}
 
export default creatForm;