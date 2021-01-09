import React, {Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap'

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
            <div></div>
        );
    }
}

const ProductDetails = (props) => {
    const product = props.product;
    if (product != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderProduct product={product} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments commentsArray={product.comments} />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

export default ProductDetails;