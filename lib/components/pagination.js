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

var _antd = require('antd');

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

var GPagination = (_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(GPagination, _React$Component);

  function GPagination() {
    (0, _classCallCheck3.default)(this, GPagination);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(GPagination).apply(this, arguments));
  }

  (0, _createClass3.default)(GPagination, [{
    key: '_handlePageChange',

    // constructor (props) {
    //   super(props)
    //   this.state = {
    //   }
    // }

    value: function _handlePageChange(page) {
      if (typeof this.props.pagination.pageChange === 'function') {
        this.props.pagination.pageChange(page);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var defaultLocale = {
        first_page: 'First Page',
        items_per_page: '/page',
        jump_to: 'Goto',
        last_page: 'Last Page',
        next_5: 'Next 5 Pages',
        next_page: 'Next Page',
        page: '',
        prev_5: 'Previsous 5 Pages',
        prev_page: 'Previous Page'
      };
      var _props = this.props;
      var pagination = _props.pagination;
      var _props$locale = _props.locale;
      var locale = _props$locale === undefined ? defaultLocale : _props$locale;
      var dataSource = _props.dataSource;

      return pagination && pagination.total && pagination.size < dataSource.length ? _react2.default.createElement(
        'div',
        { className: 'nd-pagination' },
        _react2.default.createElement(_antd.Pagination, { current: pagination.currentPage, defaultCurrent: pagination.currentPage, onChange: this._handlePageChange, total: pagination.total, locale: locale, pageSize: pagination.size })
      ) : false;
    }
  }]);
  return GPagination;
}(_react2.default.Component), _class2.propTypes = {
  pagination: _react.PropTypes.object,
  locale: _react.PropTypes.object,
  dataSource: _react.PropTypes.array
}, _temp), (_applyDecoratedDescriptor(_class.prototype, '_handlePageChange', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_handlePageChange'), _class.prototype)), _class);
exports.default = GPagination;
module.exports = exports['default'];