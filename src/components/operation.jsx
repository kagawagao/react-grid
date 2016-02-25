import React, { PropTypes } from 'react'
import ItemAction from './itemAction'
export default class Operation extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    itemActions: PropTypes.array
  };
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    const { data, itemActions = [] } = this.props
    return (
      <div className="nd-action">
        {itemActions.map((itemAction, actionIndex) => (
          <ItemAction key={actionIndex} itemAction={itemAction} data={data} {...this.props}/>
        ))}
      </div>
      )
  }
}
