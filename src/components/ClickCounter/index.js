// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  <br>
  increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  })

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The button has been clicked <span className="span">{count}</span>
          Times
        </h1>
        <p>Click the button to increase the count</p>
        <button className="button" onClick={this.increment}>
          Click me
        </button>
      </div>
    )
  }
}
export default ClickCounter
