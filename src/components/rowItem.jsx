import React, { PropTypes } from 'react'
export default class RItem extends React.Component {
  static propTypes = {
    labelIndex: PropTypes.number.isRequired,
    data: PropTypes.object.isRequired,
    labelData: PropTypes.object.isRequired,
    uniqueId: PropTypes.string.isRequired,
    className: PropTypes.string
  };
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    const { labelData, data, labelIndex, uniqueId, className } = this.props
    return (
        <div className={className} key={labelIndex}>
          <span>
          {typeof labelData.render === 'function' ? labelData.render(data[labelData.name], data[uniqueId], data) : data[labelData.name]}
          </span>
        </div>
      )
  }
}
