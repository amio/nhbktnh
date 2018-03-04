import React from 'react'
import PatternLock from '../src/react-pattern-lock.js'

export default class Index extends React.Component {
  state = {}

  onPatternGesture = (gesture) => {
    this.setState({gesture})
  }

  render () {
    return (
      <React.Fragment>
        <div className='lock'>
          <PatternLock onEnd={this.onPatternGesture} />
          <div className='pass-view'>{this.state.gesture}</div>
        </div>
        <style jsx>{`
          .lock {
            min-width: 240px;
            margin: 0 auto;
          }
          .pass-view {
            text-align: center;
          }
        `}</style>
      </React.Fragment>
    )
  }
}
