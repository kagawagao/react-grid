'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _desc, _value, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var GridAction = (_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(GridAction, _React$Component);

  function GridAction(props) {
    (0, _classCallCheck3.default)(this, GridAction);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(GridAction).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(GridAction, [{
    key: '_handleActions',
    value: function _handleActions(e) {
      var _this2 = this;

      var uniqueId = this.props.uniqueId;

      var eventType = e.type;
      var _props$headerAction$a = this.props.headerAction.actions;
      var actions = _props$headerAction$a === undefined ? {} : _props$headerAction$a;

      (0, _keys2.default)(actions).map(function (name) {
        if (name.replace('on', '').toLowerCase() === eventType && typeof actions[name] === 'function') {
          actions[name](e, _this2.props.data[uniqueId], _this2.props.data);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props;
      var headerAction = _props.headerAction;
      var data = _props.data;
      var _headerAction$actions = headerAction.actions;
      var actions = _headerAction$actions === undefined ? {} : _headerAction$actions;

      var newActions = {};
      (0, _keys2.default)(actions).map(function (name) {
        newActions[name] = _this3._handleActions;
      });
      return _react2.default.createElement(
        'span',
        newActions,
        typeof headerAction.render === 'function' ? headerAction.render(data[headerAction.name]) : data[headerAction.name]
      );
    }
  }]);
  return GridAction;
}(_react2.default.Component), _class2.propTypes = {
  headerAction: _react.PropTypes.object,
  data: _react.PropTypes.object,
  uniqueId: _react.PropTypes.string
}, _temp), (_applyDecoratedDescriptor(_class.prototype, '_handleActions', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_handleActions'), _class.prototype)), _class);
exports.default = GridAction;
module.exports = exports['default'];