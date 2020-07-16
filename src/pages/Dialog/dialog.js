import React, { Component } from 'react';
import {createPortal} from 'react-dom'

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.vnode = document.createElement('div')
    document.body.appendChild(this.vnode)
  }
  componentWillUnmount () {
    console.log('卸载')
    document.body.removeChild(this.vnode);
  }
  render() { 
    const child = <div style={{
      position: 'fixed',
      width: '200px',
      height: '200px',
      textAlign: 'center',
      lineHeight: '200px',
      backgroundColor: 'rgba(0, 0, 0, .2)'
    }}>
      弹窗
    </div>
    return  createPortal(child, this.vnode) 
  }
}
 
export default Dialog;