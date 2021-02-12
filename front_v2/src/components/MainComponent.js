import {Component} from "react/cjs/react.production.min";
import Products from "./ProductsComponent";
import ProductDetails from "./ProductDetailsComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import {Switch, Route, Redirect, withRouter} from "react-router-dom"
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        products: state.products,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    product={this.props.products.filter((product) => product.featured)[0]}
                    promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }

        const ProductWithId = ({match}) => {
            return (
                <ProductDetails
                    product={this.props.products.filter((product) => product.id === parseInt(match.params.productId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.productId === parseInt(match.params.productId, 10))}
                />
            );
        }

        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/products" component={() => <Products products={this.props.products}/>}/>
                    <Route path="/products/:productId" component={ProductWithId}/>
                    <Route exact path="/contactus" component={Contact}/>
                    <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps) (Main));