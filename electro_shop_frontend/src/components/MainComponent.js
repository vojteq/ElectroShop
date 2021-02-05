import {Component} from "react";
import {Navbar, NavbarBrand}from 'reactstrap'
import { Switch, Route, Redirect } from 'react-router-dom';

import Products from './ProductsComponent'
import {PRODUCTS} from "../shared/products";
import ProductDetails from "./ProductDetailsComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: PRODUCTS,
            selectedProductId: null
        };
    }

    onProductSelect(productId) {
        this.setState({selectedProductId: productId})
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            // <div>
            //     <Header />
            //     <Products products={this.state.products} onClick={(productId) => this.onProductSelect(productId)} />
            //     <ProductDetails product={this.state.products.filter((product) => product.id === this.state.selectedProductId)[0]} />
            //     <Footer />
            // </div>
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/products" component={() => <Products products={this.state.products} />} />
                    <Route exact path="/contactus" component={() => <Contact />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;