import './App.css';
import {Component} from "react/cjs/react.production.min";
import {PRODUCTS} from "./shared/products";
import Main from "./components/MainComponent";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {ConfigureStore} from "./redux/configureStore";

const store = ConfigureStore();

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: PRODUCTS
        }
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
