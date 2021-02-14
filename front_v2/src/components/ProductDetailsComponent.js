import {Component} from "react/cjs/react.production.min";
import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle, Col, Label,
    Modal, ModalBody,
    ModalHeader, Row
} from "reactstrap";
import {Link} from "react-router-dom";
import {Control, Errors, LocalForm} from "react-redux-form";
import {Loading} from "./LoadingComponent";
import {baseUrl} from "../shared/baseUrl";

function RenderProduct({product}) {
    return (
        <Card>
            <CardImg top src={baseUrl + product.image} alt={product.name}/>
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

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length >= len;
const maxLength = (len) => (val) => val && val.length <= len;
const isValidRate = (val) => !isNaN(parseInt(val));

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isCommentFormModalOpen: false
        };

        this.toggleCommentFormModal = this.toggleCommentFormModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleCommentFormModal() {
        this.setState({
            isCommentFormModalOpen: !this.state.isCommentFormModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleCommentFormModal();
        this.props.postComment(this.props.productId, values.rating, values.name, values.comment);
    }

    render() {
        return (
            <>
                <Button outline className="btn btn-dark" onClick={this.toggleCommentFormModal}>
                    <span className="fa fa-pencil fa-lg">
                        Add Comment
                    </span>
                </Button>
                <Modal
                    isOpen={this.state.isCommentFormModalOpen}
                    toggle={this.toggleCommentFormModal}
                >
                    <ModalHeader>
                        <strong>Submit Comment</strong>
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group" row>
                                <Col>
                                    <Label htmlFor="rating">
                                        Rating
                                    </Label>
                                    <Control.select
                                        model=".rating"
                                        name="rating"
                                        id="rating"
                                        className="form-control"
                                        validators={{
                                            isValidRate: isValidRate
                                        }}
                                    >
                                        <option/>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                    <Errors
                                        model=".rating"
                                        className="text-danger"
                                        show="touched"
                                        messages={{
                                            isValidRate: "Choose your rate"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group" row>
                                <Label htmlFor="name" md={3}>
                                    Your Name
                                </Label>
                                <Col md={9}>
                                    <Control.text
                                        model=".name"
                                        name="name"
                                        id="name"
                                        className="form-control"
                                        placeholder="Your Name"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        model=".name"
                                        className="text-danger"
                                        show="touched"
                                        messages={{
                                            required: "Required / ",
                                            minLength: "Must be at least 3 characters long / ",
                                            maxLength: "Must be 15 characters or less / "
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group" row>
                                <Label htmlFor="comment" md={3}>
                                    Comment
                                </Label>
                                <Col md={9}>
                                    <Control.textarea
                                        model=".comment"
                                        id="comment"
                                        name="comment"
                                        rows="6"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group" row>
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

function RenderComments({comments}) {
    if (comments != null && comments.length !== 0) {
        return (
            comments.map((comment) => {
                    return (
                        <ul className="list-unstyled">
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
                        </ul>
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
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.product != null) {
        let product = props.product;

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
                        <CommentForm
                            productId={product.id}
                            postComment={props.postComment}
                        />
                        <RenderComments
                            comments={props.comments}
                            postComment={props.postComment}
                            productId={props.product.id}
                        />
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