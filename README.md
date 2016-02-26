[![Build Status](https://travis-ci.org/kagawagao/react-grid.svg?branch=master)](https://travis-ci.org/kagawagao/react-grid)
[![npm](https://img.shields.io/npm/v/rc-grid.svg)](https://npmjs.org/package/rc-grid)
[![bitHound Dependencies](https://www.bithound.io/github/kagawagao/react-grid/badges/dependencies.svg)](https://www.bithound.io/github/kagawagao/react-grid/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/kagawagao/react-grid/badges/devDependencies.svg)](https://www.bithound.io/github/kagawagao/react-grid/master/dependencies/npm)
[![bitHound Overall Score](https://www.bithound.io/github/kagawagao/react-grid/badges/score.svg)](https://www.bithound.io/github/kagawagao/react-grid)
[![bitHound Code](https://www.bithound.io/github/kagawagao/react-grid/badges/code.svg)](https://www.bithound.io/github/kagawagao/react-grid)
# react-grid
React UI Component - Grid(Based on Ant Design)

## Use
```bash
$ npm install rc-grid --save
```
```javascript
import React from 'react'
import Grid from 'rc-grid'
// based on Ant design, so you should import this style
import 'antd/style/index.less'
// the default grid style
import 'rc-grid/style/index.less'
// after above, you can import your style if need
// import 'your-style.less'
export default class HomeView extends React.Component {
  constructor (props) {
    super(props)
    const time = new Date().getTime()
    // dataSource for single page
    // in real time, we always fetch data through a http request. when the page change, we get the next page's data
    const dataSource = [{
      name: 'test',
      id: '1',
      created_at: new Date(time)
    }, {
      name: 'test',
      id: '2',
      created_at: new Date(time + 1000)
    }, {
      name: 'test',
      id: '3',
      created_at: new Date(time + 2000)
    }, {
      name: 'test',
      id: '4',
      created_at: new Date(time + 3000)
    }, {
      name: 'test',
      id: '5',
      created_at: new Date(time + 4000)
    }, {
      name: 'test',
      id: '6',
      created_at: new Date(time + 5000)
    }, {
      name: 'test',
      id: '7',
      created_at: new Date(time + 5000)
    }]
    this.state = {
      dataSource
    }
  }
  render () {
    const { dataSource } = this.state
    const columns = [{
      name: 'name',
      label: 'Name',
      render: (name) => {
        return name.toLowerCase()
      },
      span: 5
    }, {
      name: 'created_at', // the key in the dataSource
      label: 'Created At', // table head label
      sortable: 'asc', // the way to sort, sortType: asc and desc
      sortAction: (type, name, data, event) => {
        dataSource.sort((item1, item2) => {
          const value = type === 'desc' ? new Date(item2.created_at).getTime() - new Date(item1.created_at).getTime()
          :new Date(item1.created_at).getTime() - new Date(item2.created_at).getTime()
          return value
        })
        this.setState({dataSource})
      },
      render: (created_at) => {
        return created_at.toISOString()
      },
      span: 5 // you can specific a span width to one column, from 1 to 24, default is flexible
    }]
    const itemHeader = [{
      name: 'id',
      render: (id) => {
        return `Id: ${id}`
      }
    }]
    const itemActions = [{
      name: 'Detail',
      action: (...args) => {
        console.log(args)
      }
    }, {
      name: 'Edit',
      action: (...args) => {
        console.log(args)
      }
    }, {
      name: 'Delete',
      action: (...args) => {
        console.log(args)
      }
    }]
    const gridActions = [
      {
        name: 'Refresh',
        action: (...args) => {
          console.log(args)
        }
      }
    ]
    const bacthActions = [
      {
        name: 'Delete',
        action: (...args) => {
          console.log(args)
        }
      }
    ]
    // warning: the pagination depend on the total and size, not depend on the dataSource's length
    const pagination = {
      total: 100, // total count
      size: 2, // page size
      currentPage: 1, // current page
      pageChange: (page) => {
        // page change callback
        console.log(page)
      }
    }
    // checkable[boolean]: render checkbox for each item
    const checkable = true
    // International
    const locale = {
      action: 'Action',
      no_data: 'No Data',
      first_page: 'First Page',
      items_per_page: '/page',
      jump_to: 'Jump To',
      last_page: 'Last Page',
      next_5: 'Next 5 pages',
      next_page: 'Next Page',
      prev_5: 'Previous 5 pages',
      prev_page: 'Previous Page',
      asc: 'Ascending',
      desc: 'Descending'
    }
    return (
      <div style={{padding: '10px 8px'}}>
        <Grid
          className='xxx-grid'
          dataSource={dataSource}
          columns={columns}
          itemActions={itemActions}
          gridActions={gridActions}
          pagination={pagination}
          batchActions={bacthActions}
          locale={locale}
          checkable={checkable}
          itemHeader={itemHeader}
          uniqueId='id'/>
      </div>
    )
  }
}
```
