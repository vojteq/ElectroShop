import {Component} from "react/cjs/react.production.min";
import {PRODUCTS} from "../shared/products";
import Products from "./ProductsComponent";
import ProductDetails from "./ProductDetailsComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import {Switch, Route, Redirect} from "react-router-dom"
import Contact from "./ContactComponent";
import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";
import About from "./AboutComponent";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: PRODUCTS,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    product={this.state.products.filter((product) => product.featured)[0]}
                    promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }

        const ProductWithId = ({match}) => {
            return (
                <ProductDetails
                    product={this.state.products.filter((product) => product.id === parseInt(match.params.productId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.productId === parseInt(match.params.productId, 10))}
                />
            );
        }

        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/products" component={() => <Products products={this.state.products}/>}/>
                    <Route path="/products/:productId" component={ProductWithId}/>
                    <Route exact path="/contactus" component={Contact}/>
                    <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders}/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }

}

export default Main;