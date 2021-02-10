import logo from './logo.svg';
import './App.css';
import {Component} from 'react/cjs/react.production.min';
import {BrowserRouter} from 'react-router-dom';
import {Navbar, NavbarBrand} from "reactstrap";
import Products from "./components/ProductsComponent";
import {PRODUCTS} from "./shared/products";
import Main from "./components/MainComponent";
import {ConfigureStore} from "./redux/configureStore";
import {Provider} from 'react-redux'

const store = ConfigureStore();

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Main/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
