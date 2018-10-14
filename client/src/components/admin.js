import React, { Component } from 'react';
import '../App.css';


class Admin extends Component {
    render() {
        return (
            <div className="Admin">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-10 adminform">
                        <h3 className="title">Enter new item</h3>
                        <form action="https://formspree.io/liztrenholme@gmail.com" method="POST">
                            <input className="text-input" placeholder="Item Name" required type="text" name="item_name" />
                            <input className="text-input" placeholder="Year" type="text" name="year" />
                            <textarea className="text-input" required rows="10" cols="25" name="description" placeholder="Description" width="50%" height="50%"></textarea>
                            <input type="submit" className='btn btn-outline-secondary' value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;