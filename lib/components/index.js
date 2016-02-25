'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _desc, _value, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _pagination = require('./pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

require('../themes/styles/index.less');

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

var Grid = (_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Grid, _React$Component);

  function Grid(props) {
    (0, _classCallCheck3.default)(this, Grid);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Grid).call(this, props));

    var checkedSet = props.defaultChecked || [];
    checkedSet.forEach(function (item, index) {
      if (!item) {
        if (typeof checkedSet.splice === 'function') {
          checkedSet.splice(index, 1);
        } else if (typeof checkedSet.delete === 'function') {
          checkedSet.delete(item);
        } else {
          throw TypeError('defaultChecked must be Array or Set');
        }
      }
    });
    _this.state = {
      checkedSet: new _set2.default(props.defaultChecked)
    };
    return _this;
  }

  (0, _createClass3.default)(Grid, [{
    key: 'checkboxChange',
    value: function checkboxChange(id, value) {
      var uniqueId = this.props.uniqueId;

      var checkedSet = this.state.checkedSet;
      if (id === 'all') {
        if (!value) {
          this.props.dataSource.map(function (item) {
            checkedSet.add(item[uniqueId]);
          });
        } else {
          checkedSet.clear();
        }
      } else {
        if (!value) {
          checkedSet.add(id);
        } else {
          checkedSet.delete(id);
        }
      }
      this.setState((0, _extends3.default)({}, this.state, { checkedSet: checkedSet }));
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className;
      // 数组

      if (Array.isArray(className)) {
        className = className.join(' ');
      }
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(_header2.default, (0, _extends3.default)({}, this.props, { checkedSet: this.state.checkedSet })),
        _react2.default.createElement(_table2.default, (0, _extends3.default)({}, this.props, { checkboxChange: this.checkboxChange, checkedSet: this.state.checkedSet })),
        _react2.default.createElement(_pagination2.default, this.props)
      );
    }
  }]);
  return Grid;
}(_react2.default.Component), _class2.propTypes = {
  uniqueId: _react.PropTypes.string,
  dataSource: _react.PropTypes.array,
  defaultChecked: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]),
  className: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array])
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'checkboxChange', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'checkboxChange'), _class.prototype)), _class);
exports.default = Grid;
module.exports = exports['default'];