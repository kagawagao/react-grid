import React, { PropTypes } from 'react'
import Checkbox from './checkbox'
import {Icon} from 'antd'
export default class THead extends React.Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    checkable: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    checkedSet: PropTypes.object,
    dataSource: PropTypes.array,
    itemHeader: PropTypes.array,
    itemActions: PropTypes.array,
    locale: PropTypes.object
  };
  constructor (props) {
    super(props)
    const { columns } = props
    let active
    let name
    columns.map(item => {
      if (item.sortable) {
        active = item.sortable
        name = item.name
      }
    })
    this.state = {
      active,
      name
    }
  }
  handleSort (type, name, event) {
    const { dataSource, columns } = this.props
    this.setState({
      ...this.state, active: type, name: name
    })
    columns.map(item => {
      if (item.name === name && typeof item.sortAction === 'function') {
        item.sortAction(type, name, dataSource, event)
      }
    })
  }
  render () {
    const { columns, checkable = 0, checkedSet, dataSource, locale = {action: 'Action'}, itemActions = [] } = this.props
    return (
      <div className="nd-tableHeader">
        <Checkbox {...this.props} checkable={checkable} checked={checkedSet.size === dataSource.length && !!dataSource.length}/>
        {columns.map((item, index) => {
          const className = item.span ? `nd-label span-${item.span}` : 'nd-label'
          return (
            <div key={index} className={className}>
              <span>{item.label}</span>
              {item.sortable ? (
                <span className="nd-sortable">
                  <Icon title={locale.asc || '升序'} className={this.state.active === 'asc' && this.state.name === item.name ? 'nd-active' : false} onClick={this.handleSort.bind(this, 'asc', item.name)} type="caret-up" />
                  <Icon title={locale.desc || '降序'} className={this.state.active === 'desc' && this.state.name === item.name ? 'nd-active' : false} onClick={this.handleSort.bind(this, 'desc', item.name)} type="caret-down" />
                </span>
              ) : false}
            </div>)
        })}
          {itemActions.length ? (
            <div className="nd-label">
              <span>{locale.action}</span>
            </div>) : false}
      </div>
      )
  }
}
