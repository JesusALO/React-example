import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import BadgeForm from "../../components/BadgeForm"
import "./NewBadge.css"
import api from "../../libs/api"

class NewBadge extends React.Component{
    
    state = {
        loading : false,
        error: null,
        form:{
            header_picture:"",
            profile_picture:"",
            name:"",
            age:"",
            city:"",
            followers:"",
            likes:"",
            post:"",
        },
    };
    
    handleChange = event =>{
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        this.setState({loading:true, error:null})

        try{
            await api.badges.create(this.state.form)
            this.setState({loading:false, error:null})
            this.props.history.push("/")
        }catch(error){
            this.setState({loading:false, error:error})
        }
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                header_picture = {this.state.form.header_picture || "http://parksadventure.com/wp-content/uploads/2017/10/header-image-1-2.png"}
                                profile_picture = {this.state.form.profile_picture || "https://st2.depositphotos.com/1009634/7235/v/600/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"}
                                name = {this.state.form.name || "Default User"}
                                age = {this.state.form.age || "21"}
                                city = {this.state.form.city || "City"}
                                followers = {this.state.form.followers || "0"}
                                likes = {this.state.form.likes || "0"}
                                post = {this.state.form.post || "0"}
                                ></Badge>
                        </div>
                        <div className="col">
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                            ></BadgeForm>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default NewBadge;