import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import { BrowserRouter } from 'react-router-dom';
import {Navbar, NavbarBrand} from "reactstrap";
import Products from "./components/ProductsComponent";
import {PRODUCTS} from "./shared/products";
import Main from "./components/MainComponent";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: PRODUCTS
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
