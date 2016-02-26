import React, { PropTypes } from 'react'
import RowHead from './rowHead'
import RowItem from './rowItem'
import Operation from './operation'
import Checkbox from './checkbox'
export default class TRow extends React.Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
    checkable: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    itemActions: PropTypes.array,
    itemHeader: PropTypes.array,
    checkedSet: PropTypes.object,
    uniqueId: PropTypes.string
  };
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    const { columns, data, checkable = 0, itemActions = [], itemHeader = [], checkedSet, uniqueId } = this.props
    return (
      <div>
        <RowHead itemHeader={itemHeader} data={data}/>
        <div className="nd-row">
          <Checkbox {...this.props} checkable={checkable} data={data} checked={checkedSet.has(data[uniqueId])}/>
          {columns.map((labelData, labelIndex) => {
            const className = labelData.span ? `nd-data span-${labelData.span}` : 'nd-data'
            return (
              <RowItem key={labelIndex} className={className} labelData={labelData} labelIndex={labelIndex} data={data} uniqueId={uniqueId}/>
            )
          })}
          {itemActions.length ? (<Operation {...this.props} itemActions={itemActions} data={data}/>) : false}
        </div>
      </div>
      )
  }
}
