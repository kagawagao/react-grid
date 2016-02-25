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

var _tableRow = require('./tableRow');

var _tableRow2 = _interopRequireDefault(_tableRow);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TBody = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(TBody, _React$Component);

  function TBody(props) {
    (0, _classCallCheck3.default)(this, TBody);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TBody).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(TBody, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var dataSource = _props.dataSource;
      var _props$locale = _props.locale;
      var locale = _props$locale === undefined ? {} : _props$locale;

      return _react2.default.createElement(
        'div',
        { className: 'nd-body' },
        dataSource.length ? _react2.default.createElement(
          'div',
          null,
          dataSource.map(function (item, dataIndex) {
            return _react2.default.createElement(_tableRow2.default, (0, _extends3.default)({ key: dataIndex, data: item }, _this2.props));
          })
        ) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_antd.Icon, { type: 'frown' }),
          ' ',
          locale.no_data || 'No Data'
        )
      );
    }
  }]);
  return TBody;
}(_react2.default.Component), _class.propTypes = {
  dataSource: _react.PropTypes.array.isRequired,
  locale: _react.PropTypes.object
}, _temp);
exports.default = TBody;
module.exports = exports['default'];