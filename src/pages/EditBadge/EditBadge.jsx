import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import BadgeForm from "../../components/BadgeForm"
import Footer from "../../components/Footer"
import "../NewBadge/NewBadge.css"
import api from "../../libs/fetch";

class EditBadge extends React.Component {

    state = {
        loading: false,
        error: null,
        form: {
            header_img_url: "",
            profile_picture_url: "",
            name: "",
            age: "",
            city: "",
            followers: "",
            likes: "",
            post: "",
        },
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({ loading: false, form: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    };

    handleChange = event => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true, error: null })

        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({ loading: false, error: null })
            this.props.history.push("/badges")
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Hero h={"10vh"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                header_img_url={
                                    this.state.form.header_img_url ||
                                    "https://www.wallpaperup.com/uploads/wallpapers/2014/02/13/253751/360d0c22c97272c81a0a9d2da1085442-187.jpg"
                                }
                                profile_picture_url={
                                    this.state.form.profile_picture_url ||
                                    "https://img.europapress.es/fotoweb/fotonoticia_20210222150710_260.jpg"
                                }
                                name={this.state.form.name || "Name LastName"}
                                age={this.state.form.age || "xx"}
                                city={this.state.form.city || "State Country"}
                                followers={this.state.form.followers || "0"}
                                likes={this.state.form.likes || "0"}
                                post={this.state.form.post || "0"}
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
                <Footer s={{ bottom: 0 }}></Footer>
            </React.Fragment>
        )
    }
}

export default EditBadge;