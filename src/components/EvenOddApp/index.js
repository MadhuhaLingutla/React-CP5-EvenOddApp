// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {displaynumber: 0, buttondecider: 0}

  chooserandomnumber = () => {
    this.setState(() => ({
      displaynumber: Math.ceil(Math.random() * 100),
      buttondecider: 1,
    }))
  }

  render() {
    const {displaynumber, buttondecider} = this.state

    const randomnumber = displaynumber
    const numbertype = randomnumber % 2 === 0 ? 'Even' : 'Odd'
    const buttonclass =
      buttondecider === 0 ? 'initialbutton' : 'incrementedbutton'

    return (
      <div className="bg-container">
        <h1 className="heading">Count {randomnumber}</h1>
        <p className="description">Count is {numbertype}</p>
        <button onClick={this.chooserandomnumber} className={buttonclass}>
          Increment
        </button>
        <p className="instruction">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
