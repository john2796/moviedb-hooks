import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DelayedSpinner extends Component {
  state = {
    showSpinner: false,
  }

  // switch showSpinner to true on page mount after 750ms
  componentDidMount() {
    const { delay } = this.props
    this.timer = setTimeout(() => this.setState({ showSpinner: true }), delay)
  }

  // prevent memory leak
  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const { showSpinner } = this.state

    return showSpinner && <h2>Loading...</h2>
  }
}

DelayedSpinner.propTypes = {
  delay: PropTypes.number,
}
export default DelayedSpinner
