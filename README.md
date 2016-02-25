[![Build Status](https://travis-ci.org/kagawagao/react-grid.svg?branch=master)](https://travis-ci.org/kagawagao/react-grid)
[![npm](https://img.shields.io/npm/v/rc-grid.svg)](https://npmjs.org/package/rc-grid)
[![bitHound Dependencies](https://www.bithound.io/github/kagawagao/react-grid/badges/dependencies.svg)](https://www.bithound.io/github/kagawagao/react-grid/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/kagawagao/react-grid/badges/devDependencies.svg)](https://www.bithound.io/github/kagawagao/react-grid/master/dependencies/npm)
[![bitHound Overall Score](https://www.bithound.io/github/kagawagao/react-grid/badges/score.svg)](https://www.bithound.io/github/kagawagao/react-grid)
[![bitHound Code](https://www.bithound.io/github/kagawagao/react-grid/badges/code.svg)](https://www.bithound.io/github/kagawagao/react-grid)
# react-grid
React UI Component - Grid(Based on Ant Design)

## Use
```javascript
  import Grid from 'rc-grid'

  ...
  render () {
    const dataSource = [] // dataSource, Array.isArray(dataSource) return true
    const columns = [{
      name: 'created_at', // the key in the dataSource
      label: 'Created At', // table head label
      sortable: 'desc', // the way to sort, sortType: asc and desc
      sortAction: (type, name, data, event) => {
        // sort action callback, arguments:[sortType, name, dataSource, EventObject]
      },
      render: created_at => {
        // after render callback, arguments:[value, uniqueId, itemData]
      },
      span: 5 // you can specific a span width to one column, from 1 to 24, default is flexible
    }]
    const itemActions = [{
      name: 'Detail',
      action: (e, id, data) => {
        // item action callback, only support click, arguments: [EventObject, uniqueId, itemData]
      }
    }]
    const gridActions = [
      {
        name: 'Refresh',
        action: () => {
          // grid action call, only support click
        }
      }
    ]

    const pagination = {
      total: 100, // total count
      size: 10, // page size
      currentPage: 1, // current page
      pageChange: page => {
        // page change callback
    }

    //International
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
      <Grid className="xxx-grid" dataSource={dataSource} columns={columns} itemActions={itemActions} gridActions={gridActions} pagination={pagination} locale={locale} uniqueId = "id"/>
    )
  }
```
