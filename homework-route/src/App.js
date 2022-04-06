import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/pages/Home';
import Product from './components/pages/Products';
import ProductCreate from './components/pages/CreateProduct';
import User from './components/pages/Users';
import Error from './components/pages/Error/Error';
import { Redirect } from 'react-router-dom';
import Login from './components/pages/Auth/Login';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './components/pages/Detail/ProductDetail';

const ProtectedRoute = ({ state, children, ...rest }) => {
  return state ? (<Route {...rest}>{children}</Route>) : (<Redirect to={"/error"} />);};

function App() {
  const [state, setState] = React.useState(false);

  return (
    <div>
        <Router>
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>

      {/* <ProtectedRoute state={state} path="/product" component={Product} /> */}
      
        <Route path={"/login"} exact>
          <Login/>
        </Route>

        <Route path={"/createProduct"} exact>
          <ProductCreate/>
        </Route>

      <Route path="/product" exact>
        <Product/>
      </Route>

      <Route path="/user" exact>
        <User/>
      </Route>

      <Route path="/ProductDetail" exact>
        <ProductDetail/>
      </Route>

      <Route path="/error" exact>
        <Error/>
      </Route>
      
      <Redirect to="/error" exact/>
    </Switch>
  </Router>

    </div>

  
  );
}

export default App;
