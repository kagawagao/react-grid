import React, { PropTypes } from 'react'
import autobind from 'autobind-decorator'

export default class GridAction extends React.Component {
  static propTypes = {
    headerAction: PropTypes.object,
    data: PropTypes.object,
    uniqueId: PropTypes.string
  };
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  @autobind
  _handleActions (e) {
    const { uniqueId } = this.props
    const eventType = e.type
    const { actions = {} } = this.props.headerAction
    Object.keys(actions).map(name => {
      if (name.replace('on', '').toLowerCase() === eventType && typeof actions[name] === 'function') {
        actions[name](e, this.props.data[uniqueId], this.props.data)
      }
    })
  }
  render () {
    const { headerAction, data } = this.props
    const { actions = {} } = headerAction
    const newActions = {}
    Object.keys(actions).map(name => {
      newActions[name] = this._handleActions
    })
    return (
      <span {...newActions}>
      {typeof headerAction.render === 'function' ? headerAction.render(data[headerAction.name]) : data[headerAction.name]}
      </span>
      )
  }
}
