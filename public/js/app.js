'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      ml_type: ''
    };

    _this.runRequest = _this.runRequest.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // get all entities - GET

    }
  }, {
    key: 'runRequest',
    value: function runRequest(e) {
      // run request to API - POST
      e.preventDefault();
    }
  }, {
    key: 'handleChange',
    value: function handleChange(changeObject) {
      this.setState(changeObject);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'row justify-content-center' },
          React.createElement(
            'div',
            { className: 'col-md-8' },
            React.createElement(
              'h1',
              { className: 'display-4 text-center' },
              'Try ML Types'
            ),
            React.createElement(
              'form',
              { className: 'd-flex flex-column' },
              React.createElement(
                'legend',
                { className: 'text-center' },
                'Choose ML Type'
              ),
              React.createElement(
                'label',
                { htmlFor: 'ml_type' },
                'ML Type:',
                React.createElement(
                  'select',
                  {
                    value: this.state.ml_type,
                    onChange: function onChange(e) {
                      return _this2.handleChange({ ml_type: e.target.value });
                    }
                  },
                  React.createElement(
                    'option',
                    { value: 'Object Prescence' },
                    'Object Prescence'
                  ),
                  React.createElement(
                    'option',
                    { value: 'Object Location' },
                    'Object Location'
                  )
                )
              ),
              React.createElement(
                'button',
                { className: 'btn btn-primary', type: 'button', onClick: function onClick(e) {
                    return _this2.runRequest(e);
                  } },
                'Run'
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var domContainer = document.querySelector('#App');
ReactDOM.render(React.createElement(App, null), domContainer);