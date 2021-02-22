import React from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardTitle} from "reactstrap";
import {Loading} from "./LoadingComponent";
import {baseUrl} from "../shared/baseUrl";

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return (
            <Loading/>
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else if (item != null) {
        return (
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name}/>
                <CardBody>
                    <CardTitle>
                        {item.name}
                    </CardTitle>
                    {item.description ? <CardSubtitle>{item.description}</CardSubtitle> : null}
                </CardBody>
            </Card>
        );
    }
    else {
        return (
            <div/>
        );
    }
}


function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard
                        item={props.product}
                        isLoading={props.productsLoading}
                        errMess={props.productsErrMess}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}
                                isLoading={props.promotionsLoading}
                                errMess={props.promotionsErrMess}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}/>
                </div>
            </div>
        </div>
    );
}

export default Home;