import React, { PropTypes } from 'react'
import Table from './table'
import Header from './header'
import Pagination from './pagination'
import autobind from 'autobind-decorator'
export default class Grid extends React.Component {
  static propTypes = {
    uniqueId: PropTypes.string,
    dataSource: PropTypes.array,
    defaultChecked: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  };

  constructor (props) {
    super(props)
    const checkedSet = props.defaultChecked || []
    checkedSet.forEach((item, index) => {
      if (!item) {
        if (typeof checkedSet.splice === 'function') {
          checkedSet.splice(index, 1)
        } else if (typeof checkedSet.delete === 'function') {
          checkedSet.delete(item)
        } else {
          throw TypeError('defaultChecked must be Array or Set')
        }
      }
    })
    this.state = {
      checkedSet: new Set(props.defaultChecked)
    }
  }

  componentWillReceiveProps (nextProps) {
    const checkedSet = nextProps.defaultChecked || []
    checkedSet.forEach((item, index) => {
      if (!item) {
        if (typeof checkedSet.splice === 'function') {
          checkedSet.splice(index, 1)
        } else if (typeof checkedSet.delete === 'function') {
          checkedSet.delete(item)
        } else {
          throw TypeError('defaultChecked must be Array or Set')
        }
      }
    })
    this.state = {
      checkedSet: new Set(nextProps.defaultChecked)
    }
  }
  @autobind
  checkboxChange (id, value) {
    const { uniqueId } = this.props
    const checkedSet = this.state.checkedSet
    if (id === 'all') {
      if (!value) {
        this.props.dataSource.map(item => {
          checkedSet.add(item[uniqueId])
        })
      } else {
        checkedSet.clear()
      }
    } else {
      if (!value) {
        checkedSet.add(id)
      } else {
        checkedSet.delete(id)
      }
    }
    this.setState({...this.state, checkedSet})
  }

  render () {
    let { className } = this.props
    // 数组
    if (Array.isArray(className)) {
      className = className.join(' ')
    }
    return (
      <div className={className}>
        <Header {...this.props} checkedSet={this.state.checkedSet}/>
        <Table {...this.props} checkboxChange={this.checkboxChange} checkedSet={this.state.checkedSet}/>
        <Pagination {...this.props}/>
      </div>
    )
  }
}
