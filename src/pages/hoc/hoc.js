import React from 'react';
import HOCChild from './child'
export const generateHOC = (Comps) => (props) => {
  console.log(props)
  return (
    <div style={{border: '1px solid #000', padding: '5px', margin: '5px'}}>
      <Comps></Comps>
    </div>
  )
}

export default generateHOC(generateHOC(HOCChild))
