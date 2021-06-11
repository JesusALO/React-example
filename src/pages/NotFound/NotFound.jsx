import React from "react";
import ERROR from "../../images/404-error.png"
import "./NotFound.css"

const NotFound = () =>{
    return(
        <React.Fragment>
            <div className="container NotFound">
                <img src={Error} alt="Not found" />
            </div>
        </React.Fragment>
    );
}

export default NotFound