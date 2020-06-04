import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import SearchPage from "./components/search-page"
import reducers from "./reducers";
import Home from "./components/home";
import MyList from "./components/my-list-page"
// import PassingMovies from "./components/passing-movies-page";

import 'bootstrap/dist/css/bootstrap.css'


//Let's start in index.js by setting up our router, Provider and middleware (we'll be using redux-promise again):
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//Notice that we added a route to match the url,
// /posts/:id, but we also added exact to our root Route just so we can test our new route
ReactDOM.render(
 <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/search" component={SearchPage} />
          {/* <Route path="/passing" component={PassingMovies} /> */}
          <Route path="/my-list" component={MyList} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);
