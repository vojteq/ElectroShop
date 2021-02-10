import React, {Component} from "react";
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap'
import {Link} from "react-router-dom";

function RenderProduct({product}) {
    return (
        <div key={product.id}>
            <Card>
                <CardImg object width="100%" src={product.image} alt={product.name} />
                <CardBody>
                    <CardTitle>
                        {product.name}
                    </CardTitle>
                    <CardText>
                        {product.description}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({commentsArray}) {
    if (commentsArray != null) {
        const comments = commentsArray.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>
                        -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    </p>
                </li>
            );
        });

        return (
            <div>
                <h4>Comments</h4>
                <div className="list-unstyled">
                    {comments}
                </div>
            </div>
        );
    }
    else {
        return (
            <div>No Comments</div>
        );
    }
}

const ProductDetails = (props) => {
    const product = props.product;
    if (product != null) {
        return (
            <div className="container">
                <div className="row">
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
                        <h3>{product.name}</h3>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderProduct product={product} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments commentsArray={props.comments} />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>ERROR</div>
        );
    }
}

export default ProductDetails;