import React, { Component, PropTypes } from 'react'
import THead from './tableHead'
import TBody from './tableBody'

export default class Table extends Component {
  static propTypes = {
    dataSource: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    uniqueId: PropTypes.string,
    checkboxChange: PropTypes.func,
    checkedSet: PropTypes.object
  };
  constructor (props) {
    super(props)
    const uniqueId = props.uniqueId
    if (!uniqueId) {
      throw TypeError('uniqueId is not defined')
    }
    this.state = {
      uniqueId: uniqueId
    }
  }
  render () {
    return (
      <div className="nd-table">
        <THead {...this.props} uniqueId={this.state.uniqueId} checkboxChange={this.props.checkboxChange} checkedSet={this.props.checkedSet}/>
        <TBody {...this.props} uniqueId={this.state.uniqueId} checkboxChange={this.props.checkboxChange} checkedSet={this.props.checkedSet}/>
      </div>
      )
  }
}
