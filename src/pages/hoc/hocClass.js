import React, { Component } from 'react';
import {generateHOC} from './hoc'
@generateHOC 
@generateHOC 
class HocClass extends Component {
  state = {  }
  render() {
    return (
      <div>class组件</div>
    );
  }
}
export default HocClass