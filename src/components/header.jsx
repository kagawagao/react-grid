import React, { PropTypes } from 'react'
import Button from './button'
export default class Header extends React.Component {
  static propTypes = {
    gridActions: PropTypes.array,
    batchActions: PropTypes.array,
    checkedSet: PropTypes.object,
    dataSource: PropTypes.array,
    uniqueId: PropTypes.string
  };

  // constructor (props) {
  //   super(props)
  //   this.state = {
  //
  //   }
  // }

  render () {
    const { gridActions = [], batchActions = [], checkedSet = new Set() } = this.props
    return (
      <div className="nd-header">
        {gridActions.map((action, index) => (
          <Button actionType="normal" key={index} name={action.name} action={action.action} renderFunc={action.render}/>
          ))}
        {batchActions.map((action, index) => (
          <Button disabled={!checkedSet.size} actionType="batch" key={index} name={action.name} action={action.action} checkedSet={this.props.checkedSet} dataSource={this.props.dataSource} uniqueId={this.props.uniqueId} renderFunc={action.render}/>
          ))}
      </div>
    )
  }
}
