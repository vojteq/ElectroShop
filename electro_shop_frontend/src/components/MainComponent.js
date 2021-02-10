import {Component} from "react";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Products from './ProductsComponent'
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import ProductDetailsComponent from "./ProductDetailsComponent";
import {connect} from "react-redux";
import {addComment} from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        products: state.products,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (productId, rating, author, comment) => dispatch(addComment(productId, rating, author, comment))
});

class Main extends Component {



    render() {

        const HomePage = () => {
            return (
                <Home
                    product={this.props.products.filter((product) => product.featured)[0]}
                    promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const ProductDetails = ({match}) => {
            return (
                <ProductDetailsComponent
                    product={this.props.products.filter((product) => product.id === parseInt(match.params.selectedProductId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.productId === parseInt(match.params.selectedProductId, 10))}
                    addComment={this.props.addComment}
                />
            );
        }

        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path='/products' component={() => <Products products={this.props.products}/>}/>
                    <Route exact path='/contactus' component={() => <Contact/>}/>
                    <Route path='products/:productId' component={ProductDetails} />
                    <Redirect to='/home'/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));