import React from 'react';
import { themeContext, UserConsumer } from '../../components/themeContext';


export function HomeChild () {
  return (
    <div>
      <themeContext.Consumer>
        {context => <div>
          {context.color}
          <UserConsumer>
            {ctx => <div>名字是：{ctx.name}</div>}
            
          </UserConsumer>  
        </div>}
      </themeContext.Consumer>
      
    </div>
  )
}
