import React, { PropTypes } from 'react'
import {Pagination} from 'antd'
import autobind from 'autobind-decorator'
export default class GPagination extends React.Component {
  static propTypes = {
    pagination: PropTypes.object,
    locale: PropTypes.object,
    dataSource: PropTypes.array
  };
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //   }
  // }

  @autobind
  _handlePageChange (page) {
    if (typeof this.props.pagination.pageChange === 'function') {
      this.props.pagination.pageChange(page)
    }
  }
  render () {
    const defaultLocale = {
      first_page: 'First Page',
      items_per_page: '/page',
      jump_to: 'Goto',
      last_page: 'Last Page',
      next_5: 'Next 5 Pages',
      next_page: 'Next Page',
      page: '',
      prev_5: 'Previsous 5 Pages',
      prev_page: 'Previous Page'
    }
    const { pagination, locale = defaultLocale } = this.props
    return (
      pagination && pagination.total && pagination.size < pagination.total ? (
        <div className="nd-pagination">
          <Pagination current={pagination.currentPage} defaultCurrent={pagination.currentPage} onChange={this._handlePageChange} total={pagination.total} locale={locale} pageSize={pagination.size}/>
        </div>) : false
    )
  }
}
