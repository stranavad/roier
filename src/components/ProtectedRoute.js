import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const location = useLocation(); // for getting arguments from login or register
    return (
        <Route {...rest} render={
            props => {
                if (location.state !== undefined) { // if location.state is underfined, the page isn't a redirect from login or register
                    if (location.state.loggedIn) {
                        return <Component {...rest} {...props} email={location.state.email} firebase={location.state.firebase}/> // user is logged in
                    } else { // this shouldn't run ever
                        return <Redirect to={
                            {
                                pathname: "/unauthorized",
                            }
                        }
                        />
                    }
                } else { // page isn't a redirect
                    return <Redirect to={
                            {
                                pathname: "/unauthorized",
                            }
                        }
                        />
                }
            }
        }/>
    )
}
export default ProtectedRoute;