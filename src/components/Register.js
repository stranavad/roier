import React from 'react';
import Footer from './Footer.js';
import PropTypes from 'prop-types';

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            user: {},
            loggedIn: false,
            passwordStyle: "c-form-input",
            passwordPlaceholder: "*****",
            emailStyle: "c-form-input",
            emailPlaceholder: "@"
        }

        this.onChange = this.onChange.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });  // for saving changes in form imputs to state

    addUser = (e) => {
        e.preventDefault();
        this.props.firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
            this.setState({
                user: userCredential.user,
                loggedIn: true
            })
        })
            .catch((error) => {
                console.log(error.code);
                if (error.code === "auth/weak-password") {
                    this.setState({
                        passwordStyle: "c-form-input cc-wrong",
                        passwordPlaceholder: "Weak password",
                    });
                } else if (error.code === "auth/email-already-in-use") {
                    this.setState({
                        emailStyle: "c-form-input cc-wrong",
                        emailPlaceholder: "Email already in use",
                    });
                }
        });
    }

    componentDidUpdate(prevProps) {
        if (this.state.loggedIn && this.state.loggedIn !== prevProps.loggedIn) {
            // Login was successful, redirecting to /protected
            this.props.history.push({
                pathname: "/protected",
                state: {
                    email: this.state.email,
                    loggedIn: true,
                }
            })
        }
    }

    render() {
        let imgBackground = require("./roier-homepage-background.png").default;;
        let imgLogo = require("./roier-logo-white.png").default;
        return (
            <div className="c-page">
                <div className="c-landing">
                    <img alt="Page Background" src={imgBackground} className="c-background-image" />
                    <img alt="ROIER Logo" src={imgLogo} className="c-logo" />
                    <div className="c-form-container">
                        <form onSubmit={this.addUser}>
                            <h3 className="c-form-heading">REGISTRACE NOVÉHO INVESTORA</h3>
                            <div className="c-form-combo">
                                <label className="c-form-label" htmlFor="email">Email</label>
                                <input className={this.state.emailStyle} type="email" placeholder={this.state.emailPlaceholder} id="email" name="email" onChange={this.onChange} value={this.state.email}/>
                            </div>
                            <div className="c-form-combo">
                                <label className="c-form-label" htmlFor="password">Heslo</label>
                                <input className={this.state.passwordStyle} type="password" placeholder={this.state.passwordPlaceholder} id="password" name="password" onChange={this.onChange} value={this.state.password}/>
                            </div>
                            <div className="c-form-question-container">
                                <p><a className="c-form-link" href="https://drive.google.com/file/d/1ygCbqpaeDKf5X__WG0TNO3nZa0Z6Rf-i/view?usp=sharing">Podmínky zpracování osobních údajů</a></p>
                            </div>
                            <div className="c-form-double-button-container">
                                <a href="/" className="c-form-submit cc-double cc-white">Přihlásit se</a>
                                <input className="c-form-submit cc-double" type="submit" value="Registrovat se" />
                            </div>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

Register.propTypes = {
    firebase: PropTypes.object.isRequired
}

export default Register;