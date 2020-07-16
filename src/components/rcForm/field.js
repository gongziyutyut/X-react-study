import React, {Component} from 'react';
import FormContext from './formContext';

export default class Field extends Component {
  state = {  }
  static contextType = FormContext 
  onStoreChange = () => {
    this.forceUpdate()
  }
  getControled = () => {
    const _this = this
    const {getFieldValue, setFieldValue} = this.context
    const {name} = this.props
    return {
      value: getFieldValue(name),
      onChange: (e) => {
        const newVal = e.target.value
        setFieldValue({[name]: newVal})
        _this.onStoreChange()
        console.log(newVal, 'value');
      }
    }
  }
  render() {
    const {children} = this.props
    const childNode = React.cloneElement(children, this.getControled())
    return childNode
  }
}