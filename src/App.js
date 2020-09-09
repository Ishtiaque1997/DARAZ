import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { AuthContextProvider, PrivateRoute } from './Components/Login/useAuth';
import Shipment from './Components/Shipment/Shipment';


function App() {
  const user={name:'kodumia',email:'fghfhgfgf67@gmail.com'}
  return (
    <div>
      <AuthContextProvider>
    <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
              <Inventory></Inventory>
          </Route>
          <Route exact  path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/login">
           <Login></Login>
          </Route>
          <PrivateRoute path="/shipment">
           <Shipment></Shipment>
          </PrivateRoute>
          <Route path="*">
             <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthContextProvider>
    </div>
  );

 
  
}

export default App;
