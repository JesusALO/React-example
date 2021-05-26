import React, {Component} from "react"
import './style/BadgeForm.css'

class BadgeForm extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="BadgeForm m-5">
                    <form onSubmit={this.props.onSubmit}>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Name
                            </label>
                            <input 
                                type="text"
                                className="form-control"
                                name="name"
                                onChange={this.props.onChange}
                                value={this.props.formValues.name} 
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Profile Picture URL
                            </label>
                            <input 
                                type="text"
                                className="form-control"
                                name="profile_pic_url"
                                onChange={this.props.onChange}
                                value={this.props.formValues.profile_picture} 
                            />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeForm;