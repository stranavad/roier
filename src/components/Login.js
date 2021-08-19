import React from 'react';
import Footer from './Footer.js';
import PropTypes from 'prop-types';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            loggedIn: false,
            user: {},
            // Next items for input design when you pass wrong credentials
            passwordStyle: "c-form-input",
            passwordPlaceholder: "*****",
            emailStyle: "c-form-input",
            emailPlaceholder: "@"
        }
        this.onChange = this.onChange.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    signIn = (e) => {
        e.preventDefault();
        this.props.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
            this.setState({
                user: userCredential.user,
                loggedIn: true,
            })
        })
            .catch((error) => {
            // This code will change the design of inputs, when the credentials are wrong
            if (error.code === "auth/wrong-password") {
                this.setState({
                    passwordStyle: "c-form-input cc-wrong",
                    passwordPlaceholder: "Wrong password",
                });
            } else if (error.code === "auth/user-not-found") {
                this.setState({
                    emailStyle: "c-form-input cc-wrong",
                    emailPlaceholder: "User doesn't exist",
                });
            }
        });
  }

    // When firebase login, set states is completed, the we redirect to /protected in methof below
    componentDidUpdate(prevProps) {
        if (this.state.loggedIn && this.state.loggedIn !== prevProps.loggedIn) {
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
                    <img alt="Page Background" src={imgBackground} className="c-background-image"/>
                    <img alt="ROIER Logo" src={imgLogo} className="c-logo" />
                    <div className="c-form-container">
                        <form onSubmit={this.signIn} action="/protected">
                            <h3 className="c-form-heading">PŘIHLAŠTE SE PRO ZOBRAZENÍ AKTUÁLNÍ NABÍDKY INVESTIC</h3>
                            <div className="c-form-combo">
                                <label className="c-form-label" htmlFor="email">Email</label>
                                <input className={this.state.emailStyle} type="email" placeholder={this.state.emailPlaceholder} id="email" name="email" value={this.state.email} onChange={this.onChange}/>
                            </div>
                            <div className="c-form-combo">
                                <label className="c-form-label" htmlFor="password">Heslo</label>
                                <input className={this.state.passwordStyle} type="password" placeholder={this.state.passwordPlaceholder} id="password" name="password" value={this.state.password} onChange={this.onChange}/>
                            </div>
                            <div className="c-form-question-container">
                                <p><a className="c-form-link" href="https://app.roier.cz/#/recover">Potíže s přihlášením?</a></p>
                            </div>
                            <input className="c-form-submit" type="submit" value="PŘIHLÁSIT SE" />
                            <p className="c-form-bottom-text">Ještě nemáte účet? <a className="c-form-link" href="/register">Zaregistrujte se!</a></p>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
         );
    }
}

Login.propTypes = {
    firebase: PropTypes.object.isRequired,
}

export default Login;