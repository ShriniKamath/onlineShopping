import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'

class App extends React.Component {

  render () {
    return (
      <Main />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
