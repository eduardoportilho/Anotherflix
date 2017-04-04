import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='Props are the best' color='rebeccapurple' />
        <MyTitle title='semicolons are the best' color='tomato' />
        <MyTitle title='yada' color='cornflowerblue' />
        <MyTitle title='qqqq' color='forestgreen' />
      </div>
    )
  }
})
ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
