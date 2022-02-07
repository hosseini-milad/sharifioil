import React from 'react';
import ReactDOM from 'react-dom';
import client from "./components/ApolloClient";
import { ApolloProvider } from "@apollo/client";
import './css/App.css';import './css/fonts.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Layout from './components/Layout'
import Shop from './pages/Shop';
import Product from './pages/Product';
import Category from './pages/Category';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Layout>
       <Router>
         <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/category/:title" component={Category}/>
          <Route path="/product" component={Product}/>
         </Switch>
       </Router>
      </Layout>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
