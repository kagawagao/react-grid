import React, { PropTypes } from 'react'
import RHeadAction from './rowHeadAction'
export default class RHead extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    itemHeader: PropTypes.array
  };
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    const { data, itemHeader = [] } = this.props
    return (
      itemHeader.length > 0 ? (
        <div className="nd-rowHeader">
          {itemHeader.map((labelData, labelIndex) => (
            <RHeadAction key={labelIndex} headerAction={labelData} data={data} {...this.props}/>
            ))}
        </div>) : false
      )
  }
}
