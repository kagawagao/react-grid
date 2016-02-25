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

var _antd = require('utils/antd');

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

var __Button = (_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(__Button, _React$Component);

  function __Button(props) {
    (0, _classCallCheck3.default)(this, __Button);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(__Button).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(__Button, [{
    key: '_handleClick',
    value: function _handleClick(e) {
      var _props = this.props;
      var action = _props.action;
      var dataSource = _props.dataSource;
      var checkedSet = _props.checkedSet;
      var actionType = _props.actionType;
      var uniqueId = _props.uniqueId;

      if (typeof action === 'function') {
        if (actionType === 'batch') {
          (function () {
            var temp = {};
            dataSource.map(function (item) {
              if (checkedSet.has(item[uniqueId])) {
                temp[item[uniqueId]] = item;
              }
            });
            action(e, checkedSet.toJSON(), temp);
          })();
        } else {
          action(e);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var name = _props2.name;
      var renderFunc = _props2.renderFunc;

      var text = typeof renderFunc === 'function' ? renderFunc(name) : name;
      return text ? _react2.default.createElement(
        _antd.Button,
        { disabled: this.props.disabled, className: 'nd-button', onClick: this._handleClick },
        text
      ) : false;
    }
  }]);
  return __Button;
}(_react2.default.Component), _class2.propTypes = {
  name: _react.PropTypes.string.isRequired,
  action: _react.PropTypes.func,
  disabled: _react.PropTypes.bool,
  checkedSet: _react.PropTypes.object,
  actionType: _react.PropTypes.string,
  dataSource: _react.PropTypes.array,
  uniqueId: _react.PropTypes.string,
  renderFunc: _react.PropTypes.func
}, _temp), (_applyDecoratedDescriptor(_class.prototype, '_handleClick', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_handleClick'), _class.prototype)), _class);

exports.default = __Button;
module.exports = exports['default'];