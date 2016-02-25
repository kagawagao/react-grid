import React, { PropTypes } from 'react'
import autobind from 'autobind-decorator'

export default class ItemAction extends React.Component {
  static propTypes = {
    itemAction: PropTypes.object,
    data: PropTypes.object,
    uniqueId: PropTypes.string
  };
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  @autobind
  _handleClick (e) {
    const { uniqueId } = this.props
    if (typeof this.props.itemAction.action === 'function') {
      this.props.itemAction.action(e, this.props.data[uniqueId], this.props.data)
    }
  }
  render () {
    const { itemAction } = this.props
    const { uniqueId } = this.props
    const text = typeof itemAction.render === 'function' ? itemAction.render(itemAction.name, this.props.data[uniqueId], this.props.data) : itemAction.name
    return (
      text ? (
        <span className="nd-actionItem" onClick={this._handleClick}>
          {text}
        </span>) : false
      )
  }
}
