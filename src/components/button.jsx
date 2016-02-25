import React, { PropTypes } from 'react'
import autobind from 'autobind-decorator'
import { Button } from 'antd'
export default class __Button extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.func,
    disabled: PropTypes.bool,
    checkedSet: PropTypes.object,
    actionType: PropTypes.string,
    dataSource: PropTypes.array,
    uniqueId: PropTypes.string,
    renderFunc: PropTypes.func
  };
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  @autobind
  _handleClick (e) {
    const {action, dataSource, checkedSet, actionType, uniqueId} = this.props
    if (typeof action === 'function') {
      if (actionType === 'batch') {
        const temp = {}
        dataSource.map(item => {
          if (checkedSet.has(item[uniqueId])) {
            temp[item[uniqueId]] = item
          }
        })
        action(e, checkedSet.toJSON(), temp)
      } else {
        action(e)
      }
    }
  }
  render () {
    const { name, renderFunc } = this.props
    const text = typeof renderFunc === 'function' ? renderFunc(name) : name
    return (
      text ? (
        <Button disabled={this.props.disabled} className="nd-button" onClick={this._handleClick}>
          {text}
        </Button>) : false
      )
  }
}
