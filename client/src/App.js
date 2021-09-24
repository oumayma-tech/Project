import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/home/Home';
import authentification from './components/authentification/authentification';
import AddProduct from './components/layouts/products/addproduct';


function App() {
  return (
    <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/auth" component={authentification} />
            <Route path='(/add|/edit)' component={AddProduct} />
          </Switch>
    </Router>
  );
}

export default App;
