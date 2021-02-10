import './App.css';
import {Component} from "react/cjs/react.production.min";
import {PRODUCTS} from "./shared/products";
import Main from "./components/MainComponent";
import {BrowserRouter} from "react-router-dom";

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
                    <Main/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
