import React, {Component} from "react"
import './style/Log_in.css'

class Log_in extends React.Component{
    render(){
        return(
            <React.Fragment>
                <center>
                    <div className="LogForm m-5">
                        <h1 className="center">Log in</h1>
                        <form onSubmit={this.props.onSubmit}>
                            <div className="form-group mb-2">
                                <label className="mb-1">
                                    Email
                                </label>
                                <input 
                                    type="email"
                                    className="form-control"
                                    name="email"
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className="mb-1">
                                    Password
                                </label>
                                <input 
                                    type="password"
                                    className="form-control"
                                    name="password"
                                />
                            </div>
                            <button type="submit" className="Submit__button">
                                Log in
                            </button>
                        </form>
                    </div>
                </center>
            </React.Fragment>
        );
    }
}

export default Log_in;