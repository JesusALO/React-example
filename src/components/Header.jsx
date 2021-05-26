import React from "react"
import {Link} from "react-router-dom"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <Link to="/">
                        <img src="https://codigosfreefire.b-cdn.net/wp-content/uploads/2020/06/logo-de-booyah-png-1024x492.png" alt="logo"/>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;