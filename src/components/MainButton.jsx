import React from "react"
import { Link } from "react-router-dom"
import "./style/MainButton.css"

const Button = props =>{
    return(
        <React.Fragment>
            <Link className="Button" to={props.link}>
                <p>{props.contextText}</p>
            </Link>
        </React.Fragment>
    );
}

export default Button