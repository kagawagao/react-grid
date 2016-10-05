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

var _tableHead = require('./tableHead');

var _tableHead2 = _interopRequireDefault(_tableHead);

var _tableBody = require('./tableBody');

var _tableBody2 = _interopRequireDefault(_tableBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Table, _Component);

  function Table(props) {
    (0, _classCallCheck3.default)(this, Table);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).call(this, props));

    var uniqueId = props.uniqueId;
    if (!uniqueId) {
      throw TypeError('uniqueId is not defined');
    }
    _this.state = {
      uniqueId: uniqueId
    };
    return _this;
  }

  (0, _createClass3.default)(Table, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'nd-table' },
        _react2.default.createElement(_tableHead2.default, (0, _extends3.default)({}, this.props, { uniqueId: this.state.uniqueId, checkboxChange: this.props.checkboxChange, checkedSet: this.props.checkedSet })),
        _react2.default.createElement(_tableBody2.default, (0, _extends3.default)({}, this.props, { uniqueId: this.state.uniqueId, checkboxChange: this.props.checkboxChange, checkedSet: this.props.checkedSet }))
      );
    }
  }]);
  return Table;
}(_react.Component), _class.propTypes = {
  dataSource: _react.PropTypes.array.isRequired,
  columns: _react.PropTypes.array.isRequired,
  uniqueId: _react.PropTypes.string,
  checkboxChange: _react.PropTypes.func,
  checkedSet: _react.PropTypes.object
}, _temp);
exports.default = Table;
module.exports = exports['default'];