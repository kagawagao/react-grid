import React, { PropTypes } from 'react'
import { Checkbox } from 'utils/antd'
import autobind from 'autobind-decorator'
export default class TCheckbox extends React.Component {
  static propTypes = {
    checkable: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    checkboxChange: PropTypes.func,
    data: PropTypes.object,
    checked: PropTypes.bool,
    uniqueId: PropTypes.string
  };
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  @autobind
  handleChange (e, value) {
    const { uniqueId } = this.props
    if (typeof this.props.checkboxChange === 'function') {
      this.props.checkboxChange(this.props.data ? this.props.data[uniqueId] : 'all', value)
    }
  }
  render () {
    const { checkable = 0 } = this.props
    return (
      checkable ? <div className="nd-checkbox">
                    <Checkbox onChange={this.handleChange} checked={this.props.checked}/>
                  </div>
                : false
      )
  }
}
