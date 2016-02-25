'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

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

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Header).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',


    // constructor (props) {
    //   super(props)
    //   this.state = {
    //
    //   }
    // }

    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var _props$gridActions = _props.gridActions;
      var gridActions = _props$gridActions === undefined ? [] : _props$gridActions;
      var _props$batchActions = _props.batchActions;
      var batchActions = _props$batchActions === undefined ? [] : _props$batchActions;
      var _props$checkedSet = _props.checkedSet;
      var checkedSet = _props$checkedSet === undefined ? new _set2.default() : _props$checkedSet;

      return _react2.default.createElement(
        'div',
        { className: 'nd-header' },
        gridActions.map(function (action, index) {
          return _react2.default.createElement(_button2.default, { actionType: 'normal', key: index, name: action.name, action: action.action, renderFunc: action.render });
        }),
        batchActions.map(function (action, index) {
          return _react2.default.createElement(_button2.default, { disabled: !checkedSet.size, actionType: 'batch', key: index, name: action.name, action: action.action, checkedSet: _this2.props.checkedSet, dataSource: _this2.props.dataSource, uniqueId: _this2.props.uniqueId, renderFunc: action.render });
        })
      );
    }
  }]);
  return Header;
}(_react2.default.Component), _class.propTypes = {
  gridActions: _react.PropTypes.array,
  batchActions: _react.PropTypes.array,
  checkedSet: _react.PropTypes.object,
  dataSource: _react.PropTypes.array,
  uniqueId: _react.PropTypes.string
}, _temp);
exports.default = Header;
module.exports = exports['default'];