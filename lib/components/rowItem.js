'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RItem = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(RItem, _React$Component);

  function RItem(props) {
    (0, _classCallCheck3.default)(this, RItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RItem.__proto__ || (0, _getPrototypeOf2.default)(RItem)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(RItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var labelData = _props.labelData;
      var data = _props.data;
      var labelIndex = _props.labelIndex;
      var uniqueId = _props.uniqueId;
      var className = _props.className;

      return _react2.default.createElement(
        'div',
        { className: className, key: labelIndex },
        _react2.default.createElement(
          'span',
          null,
          typeof labelData.render === 'function' ? labelData.render(data[labelData.name], data[uniqueId], data) : data[labelData.name]
        )
      );
    }
  }]);
  return RItem;
}(_react2.default.Component), _class.propTypes = {
  labelIndex: _react.PropTypes.number.isRequired,
  data: _react.PropTypes.object.isRequired,
  labelData: _react.PropTypes.object.isRequired,
  uniqueId: _react.PropTypes.string.isRequired,
  className: _react.PropTypes.string
}, _temp);
exports.default = RItem;
module.exports = exports['default'];