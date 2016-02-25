import React, { PropTypes } from 'react'
import Row from './tableRow'
import { Icon } from 'utils/antd'
export default class TBody extends React.Component {
  static propTypes = {
    dataSource: PropTypes.array.isRequired,
    locale: PropTypes.object
  };
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    const { dataSource, locale = {} } = this.props
    return (
        <div className="nd-body">
          {dataSource.length ? (
            <div>
              {dataSource.map((item, dataIndex) => (
              <Row key={dataIndex} data={item} {...this.props}/>
              ))}
            </div>) : (
            <div><Icon type="frown" /> {locale.no_data || 'No Data'}</div>)
        }
        </div>
      )
  }
}
