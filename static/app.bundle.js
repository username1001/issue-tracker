webpackJsonp([0],{

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(170);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(92);

var _IssueList = __webpack_require__(368);

var _IssueList2 = _interopRequireDefault(_IssueList);

var _IssueEdit = __webpack_require__(371);

var _IssueEdit2 = _interopRequireDefault(_IssueEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentNode = document.getElementById('contents');
var NoMatch = function NoMatch() {
  return _react2.default.createElement(
    'p',
    null,
    'Page Not Found'
  );
};

var App = function App(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'header' },
      _react2.default.createElement(
        'h1',
        null,
        'Issue Tracker'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'contents' },
      props.children
    ),
    _react2.default.createElement(
      'div',
      { className: 'footer' },
      'Full source available at',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'https://github.com/username1001/issue-tracker' },
        'github'
      )
    )
  );
};

var RoutedApp = function RoutedApp() {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(_reactRouter.Redirect, { from: '/', to: '/issues' }),
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: App },
      _react2.default.createElement(_reactRouter.Route, { path: '/issues', component: (0, _reactRouter.withRouter)(_IssueList2.default) }),
      _react2.default.createElement(_reactRouter.Route, { path: '/issues/:id', component: _IssueEdit2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '*', component: NoMatch })
    )
  );
};

_reactDom2.default.render(_react2.default.createElement(RoutedApp, null), contentNode);

if (false) {
  module.hot.accept();
}

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(207);

var _reactRouter = __webpack_require__(92);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IssueAdd = __webpack_require__(369);

var _IssueAdd2 = _interopRequireDefault(_IssueAdd);

var _IssueFilter = __webpack_require__(370);

var _IssueFilter2 = _interopRequireDefault(_IssueFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssueRow = function IssueRow(props) {
  return _react2.default.createElement(
    "tr",
    null,
    _react2.default.createElement(
      "td",
      null,
      _react2.default.createElement(
        _reactRouter.Link,
        { to: "/issues/" + props.issue._id },
        props.issue._id.substr(-4)
      )
    ),
    _react2.default.createElement(
      "td",
      null,
      props.issue.status
    ),
    _react2.default.createElement(
      "td",
      null,
      props.issue.owner
    ),
    _react2.default.createElement(
      "td",
      null,
      props.issue.created.toDateString()
    ),
    _react2.default.createElement(
      "td",
      null,
      props.issue.effort
    ),
    _react2.default.createElement(
      "td",
      null,
      props.issue.completionDate ? props.issue.completionDate.toDateString() : ""
    ),
    _react2.default.createElement(
      "td",
      null,
      props.issue.title
    )
  );
};

IssueRow.propTypes = {
  issue: _react2.default.PropTypes.object.isRequired
};

function IssueTable(props) {
  var issueRows = props.issues.map(function (issue) {
    return _react2.default.createElement(IssueRow, { key: issue._id, issue: issue });
  });
  return _react2.default.createElement(
    "table",
    { className: "bordered-table" },
    _react2.default.createElement(
      "thead",
      null,
      _react2.default.createElement(
        "tr",
        null,
        _react2.default.createElement(
          "th",
          null,
          "Id"
        ),
        _react2.default.createElement(
          "th",
          null,
          "Status"
        ),
        _react2.default.createElement(
          "th",
          null,
          "Owner"
        ),
        _react2.default.createElement(
          "th",
          null,
          "Created"
        ),
        _react2.default.createElement(
          "th",
          null,
          "Effort"
        ),
        _react2.default.createElement(
          "th",
          null,
          "Completion Date"
        ),
        _react2.default.createElement(
          "th",
          null,
          "Title"
        )
      )
    ),
    _react2.default.createElement(
      "tbody",
      null,
      issueRows
    )
  );
}

IssueTable.propTypes = {
  issues: _react2.default.PropTypes.array.isRequired
};

var IssueList = function (_React$Component) {
  _inherits(IssueList, _React$Component);

  function IssueList() {
    _classCallCheck(this, IssueList);

    var _this = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));

    _this.state = { issues: [] };

    _this.createIssue = _this.createIssue.bind(_this);
    _this.setFilter = _this.setFilter.bind(_this);
    return _this;
  }

  _createClass(IssueList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var oldQuery = prevProps.location.query;
      var newQuery = this.props.location.query;
      if (oldQuery.status === newQuery.status && oldQuery.effort_gte === newQuery.effort_gte && oldQuery.effort_lte === newQuery.effort_lte) {
        return;
      }
      this.loadData();
    }
  }, {
    key: "setFilter",
    value: function setFilter(query) {
      this.props.router.push({ pathname: this.props.location.pathname, query: query });
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      fetch("/api/issues" + this.props.location.search).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            data.records.forEach(function (issue) {
              issue.created = new Date(issue.created);
              if (issue.completionDate) {
                issue.completionDate = new Date(issue.completionDate);
              }
            });
            _this2.setState({ issues: data.records });
          });
        } else {
          response.json().then(function (error) {
            alert("Failed to fetch issues " + error.message);
          });
        }
      }).catch(function (err) {
        alert("Error in fetching data from server: " + err);
      });
    }
  }, {
    key: "createIssue",
    value: function createIssue(newIssue) {
      var _this3 = this;

      fetch("/api/issues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newIssue)
      }).then(function (response) {
        if (response.ok) {
          response.json().then(function (updatedIssue) {
            updatedIssue.created = new Date(updatedIssue.created);
            if (updatedIssue.completionDate) {
              updatedIssue.completionDate = new Date(updatedIssue.completionDate);
            }
            var newIssues = _this3.state.issues.concat(updatedIssue);
            _this3.setState({ issues: newIssues });
          });
        } else {
          response.json().then(function (error) {
            alert("Failed to add issue: " + error.message);
          });
        }
      }).catch(function (err) {
        alert("Error in sending data to server: " + err.message);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_IssueFilter2.default, {
          setFilter: this.setFilter,
          initFilter: this.props.location.query
        }),
        _react2.default.createElement("hr", null),
        _react2.default.createElement(IssueTable, { issues: this.state.issues }),
        _react2.default.createElement("hr", null),
        _react2.default.createElement(_IssueAdd2.default, { createIssue: this.createIssue })
      );
    }
  }]);

  return IssueList;
}(_react2.default.Component);

exports.default = IssueList;


IssueList.propTypes = {
  location: _propTypes2.default.object.isRequired,
  router: _propTypes2.default.object
};

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssueAdd = function (_React$Component) {
  _inherits(IssueAdd, _React$Component);

  function IssueAdd() {
    _classCallCheck(this, IssueAdd);

    var _this = _possibleConstructorReturn(this, (IssueAdd.__proto__ || Object.getPrototypeOf(IssueAdd)).call(this));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(IssueAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.issueAdd;
      this.props.createIssue({
        owner: form.owner.value,
        title: form.title.value,
        status: "New",
        created: new Date()
      });
      // clear the form for the next input
      form.owner.value = "";
      form.title.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "form",
          { name: "issueAdd", onSubmit: this.handleSubmit },
          _react2.default.createElement("input", { type: "text", name: "owner", placeholder: "Owner" }),
          _react2.default.createElement("input", { type: "text", name: "title", placeholder: "Title" }),
          _react2.default.createElement(
            "button",
            null,
            "Add"
          )
        )
      );
    }
  }]);

  return IssueAdd;
}(_react2.default.Component);

exports.default = IssueAdd;

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssueFilter = function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

  function IssueFilter(props) {
    _classCallCheck(this, IssueFilter);

    var _this = _possibleConstructorReturn(this, (IssueFilter.__proto__ || Object.getPrototypeOf(IssueFilter)).call(this, props));

    _this.state = {
      status: props.initFilter.status || "",
      effort_gte: props.initFilter.effort_gte || "",
      effort_lte: props.initFilter.effort_lte || "",
      changed: false
    };
    _this.onChangeStatus = _this.onChangeStatus.bind(_this);
    _this.onChangeEffortGte = _this.onChangeEffortGte.bind(_this);
    _this.onChangeEffortLte = _this.onChangeEffortLte.bind(_this);
    _this.applyFilter = _this.applyFilter.bind(_this);
    _this.resetFilter = _this.resetFilter.bind(_this);
    _this.clearFilter = _this.clearFilter.bind(_this);
    return _this;
  }

  _createClass(IssueFilter, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        status: newProps.initFilter.status || "",
        effort_gte: newProps.initFilter.effort_gte || "",
        effort_lte: newProps.initFilter.effort_lte || "",
        changed: false
      });
    }
  }, {
    key: "onChangeStatus",
    value: function onChangeStatus(e) {
      this.setState({ status: e.target.value, changed: true });
    }
  }, {
    key: "onChangeEffortGte",
    value: function onChangeEffortGte(e) {
      var effortString = e.target.value;
      if (effortString.match(/^\d*$/)) {
        this.setState({ effort_gte: e.target.value, changed: true });
      }
    }
  }, {
    key: "onChangeEffortLte",
    value: function onChangeEffortLte(e) {
      var effortString = e.target.value;
      if (effortString.match(/^\d*$/)) {
        this.setState({ effort_lte: e.target.value, changed: true });
      }
    }
  }, {
    key: "applyFilter",
    value: function applyFilter() {
      var newFilter = {};
      if (this.state.status) newFilter.status = this.state.status;
      if (this.state.effort_gte) newFilter.effort_gte = this.state.effort_gte;
      if (this.state.effort_lte) newFilter.effort_lte = this.state.effort_lte;
      this.props.setFilter(newFilter);
    }
  }, {
    key: "clearFilter",
    value: function clearFilter() {
      this.props.setFilter({});
    }
  }, {
    key: "resetFilter",
    value: function resetFilter() {
      this.setState({
        status: this.props.initFilter.status || "",
        effort_gte: this.props.initFilter.effort_gte || "",
        effort_lte: this.props.initFilter.effort_lte || "",
        changed: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        "Status:",
        _react2.default.createElement(
          "select",
          { value: this.state.status, onChange: this.onChangeStatus },
          _react2.default.createElement(
            "option",
            { value: "" },
            "(Any)"
          ),
          _react2.default.createElement(
            "option",
            { value: "New" },
            "New"
          ),
          _react2.default.createElement(
            "option",
            { value: "Open" },
            "Open"
          ),
          _react2.default.createElement(
            "option",
            { value: "Assigned" },
            "Assigned"
          ),
          _react2.default.createElement(
            "option",
            { value: "Fixed" },
            "Fixed"
          ),
          _react2.default.createElement(
            "option",
            { value: "Verified" },
            "Verified"
          ),
          _react2.default.createElement(
            "option",
            { value: "Closed" },
            "Closed"
          )
        ),
        "\xA0Effort between:",
        _react2.default.createElement("input", {
          size: 5,
          value: this.state.effort_gte,
          onChange: this.onChangeEffortGte
        }),
        "\xA0-\xA0",
        _react2.default.createElement("input", {
          size: 5,
          value: this.state.effort_lte,
          onChange: this.onChangeEffortLte
        }),
        _react2.default.createElement(
          "button",
          { onClick: this.applyFilter },
          "Apply"
        ),
        _react2.default.createElement(
          "button",
          { onClick: this.resetFilter, disabled: !this.state.changed },
          "Reset"
        ),
        _react2.default.createElement(
          "button",
          { onClick: this.clearFilter },
          "Clear"
        )
      );
    }
  }]);

  return IssueFilter;
}(_react2.default.Component);

exports.default = IssueFilter;


IssueFilter.propTypes = {
  setFilter: _propTypes2.default.func.isRequired,
  initFilter: _propTypes2.default.object.isRequired
};

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(92);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssueEdit = function (_React$Component) {
  _inherits(IssueEdit, _React$Component);

  function IssueEdit() {
    _classCallCheck(this, IssueEdit);

    var _this = _possibleConstructorReturn(this, (IssueEdit.__proto__ || Object.getPrototypeOf(IssueEdit)).call(this));

    _this.state = {
      issue: {
        _id: '',
        title: '',
        status: '',
        owner: '',
        effort: '',
        completionDate: '',
        created: ''
      }
    };
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(IssueEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.params.id !== this.props.params.id) {
        this.loadData();
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      var issue = Object.assign({}, this.state.issue);
      issue[event.target.name] = event.target.value;
      this.setState({ issue: issue });
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this2 = this;

      fetch('/api/issues/' + this.props.params.id).then(function (response) {
        if (response.ok) {
          response.json().then(function (issue) {
            issue.created = new Date(issue.created).toDateString();
            issue.completionDate = issue.completionDate !== null ? new Date(issue.completionDate).toDateString() : '';
            issue.effort = issue.effort !== null ? issue.effort.toString() : '';
            _this2.setState({ issue: issue });
          });
        } else {
          response.json().then(function (error) {
            alert('Failed to fetch issue: ' + error.message);
          });
        }
      }).catch(function (err) {
        alert('Error in fetching data from server: ' + err.message);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var issue = this.state.issue;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          null,
          'ID: ',
          issue._id,
          _react2.default.createElement('br', null),
          'Created: ',
          issue.created,
          _react2.default.createElement('br', null),
          'Status:',
          _react2.default.createElement(
            'select',
            { name: 'status', value: issue.status, onChange: this.onChange },
            _react2.default.createElement(
              'option',
              { value: 'New' },
              'New'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Open' },
              'Open'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Assigned' },
              'Assigned'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Fixed' },
              'Fixed'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Verified' },
              'Verified'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Closed' },
              'Closed'
            )
          ),
          _react2.default.createElement('br', null),
          'Owner:',
          _react2.default.createElement('input', { name: 'owner', value: issue.owner, onChange: this.onChange }),
          _react2.default.createElement('br', null),
          'Effort:',
          _react2.default.createElement('input', {
            size: 5,
            name: 'effort',
            value: issue.effort,
            onChange: this.onChange
          }),
          _react2.default.createElement('br', null),
          'Completion Date:',
          _react2.default.createElement('input', {
            name: 'completionDate',
            value: issue.completionDate,
            onChange: this.onChange
          }),
          _react2.default.createElement('br', null),
          'Title:',
          _react2.default.createElement('input', {
            name: 'title',
            size: 50,
            value: issue.title,
            onChange: this.onChange
          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'button',
            { type: 'submit' },
            'Submit'
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/issues' },
            'Back to issue list'
          )
        )
      );
    }
  }]);

  return IssueEdit;
}(_react2.default.Component);

exports.default = IssueEdit;

IssueEdit.propTypes = {
  params: _propTypes2.default.object.isRequired
};

/***/ })

},[243]);
//# sourceMappingURL=app.bundle.js.map