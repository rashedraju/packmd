import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Details from './containers/Details/Details';

const app = (
    <Router basename="/packmd">
        <Route exact path="/" component={Home} />
        <Route exact path="/package/:name" component={Details} />
    </Router>
);

ReactDOM.render(app, document.getElementById('root'));
