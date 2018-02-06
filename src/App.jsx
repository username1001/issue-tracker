import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Redirect,
  browserHistory,
  withRouter
} from 'react-router';
import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';

const contentNode = document.getElementById('contents');
const NoMatch = () => <p>Page Not Found</p>;

const App = props => (
  <div>
    <div className="header">
      <h1>Issue Tracker</h1>
    </div>
    <div className="contents">{props.children}</div>
    <div className="footer">
      Full source available at
      <a href="https://github.com/username1001/issue-tracker">github</a>
    </div>
  </div>
);

const RoutedApp = () => (
  <Router history={browserHistory}>
    <Redirect from="/" to="/issues" />
    <Route path="/" component={App}>
      <Route path="/issues" component={withRouter(IssueList)} />
      <Route path="/issues/:id" component={IssueEdit} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
);

ReactDOM.render(<RoutedApp />, contentNode);

if (module.hot) {
  module.hot.accept();
}
