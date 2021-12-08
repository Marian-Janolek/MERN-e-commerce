import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  const user = true;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/prodct/:id">
          <SingleProduct />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        {user ? (
          <Redirect to="/" />
        ) : (
          <Route path="/register">
            <Register />
          </Route>
        )}
        {user ? (
          <Redirect to="/" />
        ) : (
          <Route path="/login">
            <Login />
          </Route>
        )}
      </Switch>
    </Router>
  );
}

export default App;
