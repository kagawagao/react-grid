'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var ItemAction = (_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(ItemAction, _React$Component);

  function ItemAction(props) {
    (0, _classCallCheck3.default)(this, ItemAction);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ItemAction.__proto__ || (0, _getPrototypeOf2.default)(ItemAction)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(ItemAction, [{
    key: '_handleClick',
    value: function _handleClick(e) {
      var uniqueId = this.props.uniqueId;

      if (typeof this.props.itemAction.action === 'function') {
        this.props.itemAction.action(e, this.props.data[uniqueId], this.props.data);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var itemAction = this.props.itemAction;
      var uniqueId = this.props.uniqueId;

      var text = typeof itemAction.render === 'function' ? itemAction.render(itemAction.name, this.props.data[uniqueId], this.props.data) : itemAction.name;
      return text ? _react2.default.createElement(
        'span',
        { className: 'nd-actionItem', onClick: this._handleClick },
        text
      ) : false;
    }
  }]);
  return ItemAction;
}(_react2.default.Component), _class2.propTypes = {
  itemAction: _react.PropTypes.object,
  data: _react.PropTypes.object,
  uniqueId: _react.PropTypes.string
}, _temp), (_applyDecoratedDescriptor(_class.prototype, '_handleClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_handleClick'), _class.prototype)), _class);
exports.default = ItemAction;
module.exports = exports['default'];