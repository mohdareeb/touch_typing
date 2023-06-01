import React, { createElement } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

const AppLayout=()=>{
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// ReactDOM.render(heading1, root);
root.render(<AppLayout/>);