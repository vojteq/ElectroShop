import {Component} from "react/cjs/react.production.min";
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";

// class ProductDetails extends Component {
//
//     render() {
//         let product = this.props.product;
//         if (product != null) {
//             const comments = product.comments.map((comment) => {
//                 return (
//                     <li key={comment.id}>
//                         <p>
//                             {comment.comment}
//                         </p>
//                         <p>
//                             {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
//                         </p>
//                     </li>
//                 );
//             })
//
//             return (
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12 col-md-5 m-1">
//                             <Card>
//                                 <CardImg top src={product.image} alt={product.name}/>
//                                 <CardBody>
//                                     <CardTitle>
//                                         {product.name}
//                                     </CardTitle>
//                                     <CardText>
//                                         {product.description}
//                                     </CardText>
//                                 </CardBody>
//                             </Card>
//                         </div>
//
//                         <div className="col-12 col-md-5 m-1">
//                             <div className="list-unstyled">
//                                 {comments}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             );
//         } else {
//             return (
//                 <div/>
//             );
//         }
//     }
// }

function RenderProduct({product}) {
    return (
        <Card>
            <CardImg top src={product.image} alt={product.name}/>
            <CardBody>
                <CardTitle>
                    {product.name}
                </CardTitle>
                <CardText>
                    {product.description}
                </CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({comments}) {
    if (comments != null && comments.length !== 0) {
        console.log("komentarze: " + comments.length);
        return (
            comments.map((comment) => {
                    return (
                        <li key={comment.id}>
                            <p>
                                {comment.comment}
                            </p>
                            <p>
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                }).format(new Date(Date.parse(comment.date)))}
                            </p>
                        </li>
                    );
                }
            ));
    } else {
        return (
            <div/>
        );
    }
}

const ProductDetails = (props) => {
    let product = props.product;
    if (product != null) {
        return (
            <div className="container">
                <div className="row white-font">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/products">
                                Products
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {product.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>
                            {product.name}
                        </h3>
                        <hr/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderProduct product={product}/>
                    </div>
                    <div className="col-12 col-md-5 m-1 white-font">
                        <div className="list-unstyled">
                            <RenderComments comments={props.comments}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div/>
        );
    }
}

export default ProductDetails;