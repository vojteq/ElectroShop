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
import {Loading} from "./LoadingComponent";
import {baseUrl} from "../shared/baseUrl";

function RenderProduct({product}) {
    return (
        <Card>
            <Link to={`/products/${product.id}`}>
                <CardImg width="100%" src={baseUrl + product.image} alt={product.name}/>
                <CardTitle>
                    {product.name}
                </CardTitle>
            </Link>
        </Card>
    );
}

const Products = (props) => {
    const renderProducts = props.products.products.map((product) => {
        return (
            <div className="col-12 col-md-5 m-1" key={product.id}>
                {/*todo usunac onclicka?*/}
                <RenderProduct product={product} onClick={props.onClick}/>
            </div>
        );
    });

    const Products = () => {
        if (props.products.isLoading) {
            return (
                <Loading/>
            );
        } else if (props.products.errMess) {
            return (
                <h4>{props.products.errMess}</h4>
            );
        } else {
            return (
                <>
                    {renderProducts}
                </>
            );
        }
    }

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
                <Products/>
            </div>
        </div>
    );
}

export default Products;