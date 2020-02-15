'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appRoot = document.getElementById('app');

var Header = function Header(props) {
    return _jsx('div', {}, void 0, _jsx('h1', {}, void 0, props.title), _jsx('p', {}, void 0, props.subtitle));
};

var Action = function Action(props) {
    return _jsx('button', {
        disabled: !props.hasOptions,
        onClick: props.handlePick
    }, void 0, 'What should I do?');
};

var _ref = _jsx('p', {}, void 0, 'Please add an option to get started!');

var Options = function Options(props) {
    return _jsx('div', {}, void 0, _jsx('button', {
        disabled: !props.hasOptions,
        onClick: props.handleDeleteOptions
    }, void 0, 'Remove All'), props.options.length === 0 && _ref, props.options.map(function (option) {
        return _jsx(Option, {
            option: option,
            handleDeleteOption: props.handleDeleteOption
        });
    }));
};

var Option = function Option(props) {
    return _jsx('div', {}, void 0, props.option, _jsx('button', {
        onClick: function onClick() {
            return props.handleDeleteOption(props.option);
        }
    }, void 0, 'Remove'));
};

var _ref2 = _jsx('input', {
    type: 'text',
    autoComplete: 'off',
    name: 'option'
});

var _ref3 = _jsx('button', {}, void 0, 'Add option');

var AddOption = function (_React$Component) {
    _inherits(AddOption, _React$Component);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);

        _this.state = {
            error: null
        };
        return _this;
    }

    _createClass(AddOption, [{
        key: 'handleFormSubmit',
        value: function handleFormSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });

            // If there is no error empty the input field.
            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _jsx('div', {}, void 0, this.state.error && _jsx('p', {}, void 0, this.state.error), _jsx('form', {
                onSubmit: this.handleFormSubmit
            }, void 0, _ref2, _ref3));
        }
    }]);

    return AddOption;
}(React.Component);

var IndecisionApp = function (_React$Component2) {
    _inherits(IndecisionApp, _React$Component2);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this2 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this2.handlePick = _this2.handlePick.bind(_this2);
        _this2.handleDeleteOptions = _this2.handleDeleteOptions.bind(_this2);
        _this2.handleDeleteOption = _this2.handleDeleteOption.bind(_this2);
        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);

        _this2.state = {
            options: []
        };
        return _this2;
    }

    /** Fetch options array from local stotage */


    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var jsonOptions = localStorage.getItem('optionsData');
                var options = JSON.parse(jsonOptions);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                console.error('Error occurred while fetching data. ==> ', e);
            }
        }

        /** Save options array inside local stotage */

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var jsonOptions = JSON.stringify(this.state.options);
                localStorage.setItem('optionsData', jsonOptions);
            }
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var options = this.state.options;

            var randomNumber = Math.floor(Math.random() * options.length);
            console.log(options[randomNumber]);
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return option !== optionToRemove;
                    })
                };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter a valid value to add the option.';
            } else if (this.state.options.includes(option)) {
                return 'This option already exists.';
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision App';
            var subtitle = 'Put your life in hands of a computer.';
            return _jsx('div', {}, void 0, _jsx(Header, {
                title: title,
                subtitle: subtitle
            }), _jsx(Action, {
                hasOptions: this.state.options.length > 0,
                handlePick: this.handlePick
            }), _jsx(Options, {
                options: this.state.options,
                hasOptions: this.state.options.length > 0,
                handleDeleteOptions: this.handleDeleteOptions,
                handleDeleteOption: this.handleDeleteOption
            }), _jsx(AddOption, {
                handleAddOption: this.handleAddOption
            }));
        }
    }]);

    return IndecisionApp;
}(React.Component);

ReactDOM.render(_jsx(IndecisionApp, {}), appRoot);
