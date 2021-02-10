import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardBody,
    CardImg,
    CardImgOverlay,
    CardText,
    CardTitle,
    Media
} from "reactstrap";
import {Link} from "react-router-dom";

function RenderProduct({product}) {
    return (
        <Card>
            <Link to={`/products/${product.id}`}>
                <CardImg width="100%" src={product.image} alt={product.name}/>
                <CardImgOverlay>
                    <CardTitle>
                        {product.name}
                    </CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Products = (props) => {
    const products = props.products.map((product) => {
        return (
            <div className="col-12 col-md-5 m-1" key={product.id}>
                <RenderProduct product={product} onClick={props.onClick}/>
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
                <div className="col-12">
                    <h3>Products</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {products}
            </div>
        </div>
    );
}

export default Products;