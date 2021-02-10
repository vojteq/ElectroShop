import React, {Component} from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardBody, CardHeader,
    CardImg,
    CardImgOverlay,
    CardText,
    CardTitle,
    Media
} from "reactstrap";
import {Link} from "react-router-dom";


function RenderProduct({product, onClick}) {
    return (
        <Card>
            <Link to={`/products/${product.id}`}>
                <CardImg width="100%" src={product.image} alt={product.name}/>
                <CardHeader>
                    {product.name}
                </CardHeader>
            </Link>
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
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">
                            Home
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Products
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                {products}
            </div>
        </div>
    );
}

export default Products;