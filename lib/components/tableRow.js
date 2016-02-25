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

var _rowHead = require('./rowHead');

var _rowHead2 = _interopRequireDefault(_rowHead);

var _rowItem = require('./rowItem');

var _rowItem2 = _interopRequireDefault(_rowItem);

var _operation = require('./operation');

var _operation2 = _interopRequireDefault(_operation);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TRow = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(TRow, _React$Component);

  function TRow(props) {
    (0, _classCallCheck3.default)(this, TRow);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TRow).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(TRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var columns = _props.columns;
      var data = _props.data;
      var _props$checkable = _props.checkable;
      var checkable = _props$checkable === undefined ? 0 : _props$checkable;
      var _props$itemActions = _props.itemActions;
      var itemActions = _props$itemActions === undefined ? [] : _props$itemActions;
      var _props$itemHeader = _props.itemHeader;
      var itemHeader = _props$itemHeader === undefined ? [] : _props$itemHeader;
      var checkedSet = _props.checkedSet;
      var uniqueId = _props.uniqueId;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_rowHead2.default, { itemHeader: itemHeader, data: data }),
        _react2.default.createElement(
          'div',
          { className: 'nd-row' },
          _react2.default.createElement(_checkbox2.default, (0, _extends3.default)({}, this.props, { checkable: checkable, data: data, checked: checkedSet.has(data[uniqueId]) })),
          columns.map(function (labelData, labelIndex) {
            var className = labelData.span ? 'nd-data span-' + labelData.span : 'nd-data';
            return _react2.default.createElement(_rowItem2.default, { key: labelIndex, className: className, labelData: labelData, labelIndex: labelIndex, data: data, uniqueId: uniqueId });
          }),
          itemActions.length ? _react2.default.createElement(_operation2.default, (0, _extends3.default)({}, this.props, { itemActions: itemActions, data: data })) : false
        )
      );
    }
  }]);
  return TRow;
}(_react2.default.Component), _class.propTypes = {
  columns: _react.PropTypes.array.isRequired,
  data: _react.PropTypes.object.isRequired,
  checkable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.number]),
  itemActions: _react.PropTypes.array,
  itemHeader: _react.PropTypes.array,
  checkedSet: _react.PropTypes.object,
  uniqueId: _react.PropTypes.string
}, _temp);
exports.default = TRow;
module.exports = exports['default'];