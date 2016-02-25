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

var _rowHeadAction = require('./rowHeadAction');

var _rowHeadAction2 = _interopRequireDefault(_rowHeadAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RHead = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(RHead, _React$Component);

  function RHead(props) {
    (0, _classCallCheck3.default)(this, RHead);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RHead).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(RHead, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var data = _props.data;
      var _props$itemHeader = _props.itemHeader;
      var itemHeader = _props$itemHeader === undefined ? [] : _props$itemHeader;

      return itemHeader.length > 0 ? _react2.default.createElement(
        'div',
        { className: 'nd-rowHeader' },
        itemHeader.map(function (labelData, labelIndex) {
          return _react2.default.createElement(_rowHeadAction2.default, (0, _extends3.default)({ key: labelIndex, headerAction: labelData, data: data }, _this2.props));
        })
      ) : false;
    }
  }]);
  return RHead;
}(_react2.default.Component), _class.propTypes = {
  data: _react.PropTypes.object.isRequired,
  itemHeader: _react.PropTypes.array
}, _temp);
exports.default = RHead;
module.exports = exports['default'];