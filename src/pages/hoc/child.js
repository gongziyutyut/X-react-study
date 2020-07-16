import React, { Component } from 'react';


export default class HOCChild extends Component {
  state = {
    name: '张三',
    age: 18
  }
 
  render() {
    const {name, age} = this.state
    console.log(this.props)
    return (
      <div>
        <p>姓名是{name}</p>
        <p>年龄是{age}</p>
      </div>
    );
  }
}