import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle, Media} from "reactstrap";
import ProductDetails from "./ProductDetailsComponent";

// class Products extends Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             selectedProduct: null
//         }
//     }
//
//     onProductSelect(product) {
//         this.setState({
//             selectedProduct: product
//         });
//     }
//
//     renderProduct(product) {
//         if (product != null) {
//             return (
//                 <ProductDetails selectedProduct={this.state.selectedProduct} />
//             );
//         }
//         else {
//             return (
//                 <div></div>
//             );
//         }
//     }
//
//     render() {
//         const products = this.props.products.map((product) => {
//             return (
//                 <div className="col-12 col-md-5 m-1">
//                     <Card key={product.id} onClick={() => this.props.onClick(product.id)}>
//                         <CardImg width="100%" src={product.image} alt={product.name} />
//                         <CardImgOverlay body className="ml-5">
//                             <CardTitle>
//                                 {product.name}
//                             </CardTitle>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>
//             );
//         });
//
//         return (
//             <div className="container">
//                 <div className="row">
//                     {products}
//                 </div>
//                 <div>
//                     {this.renderProduct(this.state.selectedProduct)}
//                 </div>
//             </div>
//         );
//     }
// }

function RenderProduct({product}) {
    return (
        <Card>
            <CardImg width="100%" src={product.image} alt={product.name} />
            <CardImgOverlay>
                {product.name}
            </CardImgOverlay>
        </Card>
    );
}

const Products = (props) => {
    const products = props.products.map((product) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <RenderProduct product={product}/>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {products}
            </div>
        </div>
    );
}

export default Products;