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
import {fetchComments, fetchProducts, fetchPromotions, postComment} from "../redux/ActionCreators";
import {actions} from "react-redux-form";

const mapStateToProps = state => {
    return {
        products: state.products,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
    postComment: (productId, rating, author, comment) => dispatch(postComment(productId, rating, author, comment)),
    fetchProducts: () => dispatch(fetchProducts()),
    resetFeedbackForm: () => dispatch(actions.reset('feedback')),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromotions: () => dispatch(fetchPromotions())
});

class Main extends Component {

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchComments();
        this.props.fetchPromotions();
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    product={this.props.products.products.filter((product) => product.featured)[0]}
                    productsLoading={this.props.products.isLoading}
                    productsErrMess={this.props.products.errMess}

                    promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
                    promotionsLoading={this.props.promotions.isLoading}
                    promotionsErrMess={this.props.promotions.errMess}

                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }

        const ProductWithId = ({match}) => {
            return (
                <ProductDetails
                    product={this.props.products.products.filter((product) => product.id === parseInt(match.params.productId, 10))[0]}
                    isLoading={this.props.products.isLoading}
                    errMess={this.props.products.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.productId === parseInt(match.params.productId, 10))}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}
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
                    <Route exact path="/contactus"
                           component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}
                    />
                    <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));