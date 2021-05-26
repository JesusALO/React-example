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
    
   

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                
                                ></Badge>
                        </div>
                        <div className="col">
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default NewBadge;