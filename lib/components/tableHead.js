'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var THead = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(THead, _React$Component);

  function THead(props) {
    (0, _classCallCheck3.default)(this, THead);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(THead).call(this, props));

    var columns = props.columns;

    var active = void 0;
    var name = void 0;
    columns.map(function (item) {
      if (item.sortable) {
        active = item.sortable;
        name = item.name;
      }
    });
    _this.state = {
      active: active,
      name: name
    };
    return _this;
  }

  (0, _createClass3.default)(THead, [{
    key: 'handleSort',
    value: function handleSort(type, name, event) {
      var _props = this.props;
      var dataSource = _props.dataSource;
      var columns = _props.columns;

      this.setState((0, _extends3.default)({}, this.state, { active: type, name: name
      }));
      columns.map(function (item) {
        if (item.name === name && typeof item.sortAction === 'function') {
          item.sortAction(type, name, dataSource, event);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props;
      var columns = _props2.columns;
      var _props2$checkable = _props2.checkable;
      var checkable = _props2$checkable === undefined ? 0 : _props2$checkable;
      var checkedSet = _props2.checkedSet;
      var dataSource = _props2.dataSource;
      var _props2$locale = _props2.locale;
      var locale = _props2$locale === undefined ? { action: 'Action' } : _props2$locale;
      var _props2$itemActions = _props2.itemActions;
      var itemActions = _props2$itemActions === undefined ? [] : _props2$itemActions;

      return _react2.default.createElement(
        'div',
        { className: 'nd-tableHeader' },
        _react2.default.createElement(_checkbox2.default, (0, _extends3.default)({}, this.props, { checkable: checkable, checked: checkedSet.size === dataSource.length && !!dataSource.length })),
        columns.map(function (item, index) {
          var className = item.span ? 'nd-label span-' + item.span : 'nd-label';
          return _react2.default.createElement(
            'div',
            { key: index, className: className },
            _react2.default.createElement(
              'span',
              null,
              item.label
            ),
            item.sortable ? _react2.default.createElement(
              'span',
              { className: 'nd-sortable' },
              _react2.default.createElement(_antd.Icon, { title: locale.asc || '升序', className: _this2.state.active === 'asc' && _this2.state.name === item.name ? 'nd-active' : false, onClick: _this2.handleSort.bind(_this2, 'asc', item.name), type: 'caret-up' }),
              _react2.default.createElement(_antd.Icon, { title: locale.desc || '降序', className: _this2.state.active === 'desc' && _this2.state.name === item.name ? 'nd-active' : false, onClick: _this2.handleSort.bind(_this2, 'desc', item.name), type: 'caret-down' })
            ) : false
          );
        }),
        itemActions.length ? _react2.default.createElement(
          'div',
          { className: 'nd-label' },
          _react2.default.createElement(
            'span',
            null,
            locale.action
          )
        ) : false
      );
    }
  }]);
  return THead;
}(_react2.default.Component), _class.propTypes = {
  columns: _react.PropTypes.array.isRequired,
  checkable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.number]),
  checkedSet: _react.PropTypes.object,
  dataSource: _react.PropTypes.array,
  itemHeader: _react.PropTypes.array,
  itemActions: _react.PropTypes.array,
  locale: _react.PropTypes.object
}, _temp);
exports.default = THead;
module.exports = exports['default'];