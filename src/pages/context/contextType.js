import React, { Component } from 'react';
import { themeContext } from '../../components/themeContext';

export default class ContextType extends Component {
  static contextType = themeContext
  render() {
    console.log('渲染contextType')
    return (
      <div>
        {this.context.color}
        222222222222
      </div>
    );
  }
}