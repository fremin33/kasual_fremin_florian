import React from "react";
import { Route } from "react-router-dom";
import Lists from "../components/Lists";
import Map from "../components/Map";
import Details from "../components/Details";
import Header from "../layout/header";

const ReactRouter =()=>{
return (
    <React.Fragment>
        <Header />
        <Route exact path="/" component={Lists} />
        <Route  path="/map" component={Map} />
        <Route  path="/details/:id" component={Details} />
    </React.Fragment>
    );
}

export default ReactRouter;