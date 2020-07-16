import React from 'react'
import './home.scss'
import { HomeChild } from '../homeChild'
import { themeContext, UserProvider } from '../../components/themeContext'
import ContextType from '../context/contextType'
import HookContext from '../context/useContext'



export default class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      time: new Date(),
      count: 0,
      theme: {color: 'blue'},
      nameObj: {name: 'xxxx'},
      tableHead: {
        A: {name: '序号'},
        B: {name: '名称'},
        C: {name: '人物'},
        D: {name: '年龄'},
        E: {name: '职业'}
      },
      tableData: [
        {A: 1, B: '东邪', C: "黄药师", D: "45", E: "岛主"},
        {A: 2, B: '西毒', C: "欧阳锋", D: "43", E: "城主"},
        {A: 2, B: '南帝', C: "段皇爷", D: "50", E: "君主"},
      ]
    }
  }

  componentDidMount () {
    this.timeFn = this.timeFn.bind(this)
    this.addCount = this.addCount.bind(this)
  }

  timeFn () {
    let _this = this
    _this.setState({time: new Date()})
  }

  addCount () {
    this.setState({
      count: this.state.count+1
    })
  }

  changeColor () {
    const {theme} = this.state
    this.setState({
      theme: {color: theme.color === 'red' ? 'blue': 'red'},
    })
  }

  render () {
    const {count, tableHead, tableData, theme, nameObj} = this.state
    const {title} = this.props.children  
    return (
      <div>
        <h1>home page</h1>
        <button onClick = {this.addCount}>  开始累加 </button>
        次数是{count}
        {title && <h2>{title}</h2>}
        <table className="table">
          <thead>
            <tr>
              {
                Object.keys(tableHead).map(item => {
                  return <th key={item}>
                    {tableHead[item]['name']}
                  </th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              tableData.map((item, index) => {
                return <tr key={index}>
                  {
                    Object.keys(tableHead).map(key => {
                      return <td key={key}>
                        {item[key]}
                      </td>
                    })
                  }
                </tr>
              
              })
            }
          </tbody>
        </table>
        <button onClick={this.changeColor.bind(this)}>更改颜色</button>
        {/* <themeContext.Provider value={theme}>
          <UserProvider value={nameObj}>
            <HomeChild></HomeChild>
            <HookContext></HookContext>
          </UserProvider>
          <ContextType></ContextType>
          <TestChild></TestChild>
        </themeContext.Provider> */}
      </div>
    )
  }
}

export function TestChild (params) {
  console.log('渲染函数组件');
  
  return (
    <div>
      33333333333
    </div>
  )
};