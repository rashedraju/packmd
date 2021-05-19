import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './containers/App/App';
import Details from './containers/Details/Details';

const app = (
    <Router basename="/pack-finder">
        <Route exact path="/" component={App} />
        <Route exact path="/package/:name" component={Details} />
    </Router>
);

ReactDOM.render(app, document.getElementById('root'));
