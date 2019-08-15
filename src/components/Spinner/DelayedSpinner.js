import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DelayedSpinner extends Component {
  state = {
    showSpinner: false,
  }

  // when the page load if after 750 ms set spinner to true
  componentDidMount() {
    const { delay } = this.props
    this.timer = setTimeout(() => this.setState({ showSpinner: true }), delay)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const { showSpinner } = this.state

    return showSpinner && <h2>Loading Testing...</h2>
  }
}

DelayedSpinner.propTypes = {
  delay: PropTypes.number,
}
export default DelayedSpinner
