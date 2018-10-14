import React, { Component } from 'react';
import '../App.css';


class LoginAdmin extends Component {
    render() {
        return (
            <div className="loginAdmin">
                <div className="row">
                    <div className="col-md-12 authform">
                        <form action="/login" method="post">
                            <div>
                                <label>Username:</label>
                                <input type="text" name="username" />
                            </div>
                            <div>
                                <label>Password:</label>
                                <input type="password" name="password" />
                            </div>
                            <div>
                                <input type="submit" value="Log In" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginAdmin;