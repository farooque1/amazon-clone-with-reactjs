import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import Product from './component/Product';
import Cart from './component/Cart';
import Productdetails from './component/Productdetails';
import {BrowserRouter ,Route , Switch } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store";
import Login from './component/Login';

function App() {
  return (

<div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <Header />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/' component={Product} />
            <Route exact path='/Cart' component={Cart} />
            <Route exact path='/details/:id' component={Productdetails} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/' component={Footer} />


        </Switch>
        <Footer />
        </Provider>
      </BrowserRouter>
</div>
  
  );
}

export default App;
