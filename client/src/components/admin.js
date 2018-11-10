import React, { Component } from 'react';
import '../App.css';
import axios from "axios";


class Admin extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //   books: []
        // };
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        // axios.get('/api/book')
        //   .then(res => {
        // this.setState({ books: res.data });
        // console.log(this.state.books);
        //   })
        //   .catch((error) => {
        //     if(error.response.status === 401) {
        //       this.props.history.push("/login");
        //     }
        //   });
    }

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }
    render() {
        return (
            <div className="Admin">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-10 adminform">
                        <h3 className="title">Enter new item</h3>
                        <form action="/submit" method="POST">
                            <input className="text-input" placeholder="Item Name" required type="text"
                                name="item_name" />
                            <input className="text-input" placeholder="Manufacturer" required type="text"
                                name="item_manufacturer" />
                            <input className="text-input" placeholder="Year" type="text" name="year" />
                            <textarea className="text-input" required rows="10" cols="25"
                                name="description" placeholder="Description" width="50%" height="50%"></textarea>
                            <input className="text-input" placeholder="Estimated value" required type="text"
                                name="item_value" />
                            <select name="category">
                                    <option value="customers">customers</option>
                                    <option value="hi">hi</option>
                                    <option value="action_figures">Action Figures / Dolls</option>
                                    <option value="advertising_ads">Advertising Ads</option>
                                    <option value="artwork_busts">Artwork / Busts</option>
                                    <option value="backstage_passes">Backstage Passes</option>
                                    <option value="bags">Bags / Backpacks / Wallets</option>
                                    <option value="belt_buckles">Belt Buckles</option>
                                    <option value="blankets">Blankets / Rugs / Towels</option>
                                    <option value="books">Books</option>
                                    <option value="buttons">Buttons / Lapel Pins</option>
                                    <option value="calendars">Calendars</option>
                                    <option value="auto_accessories">Car Automobile Accessories</option>
                                    <option value="cars">Cars / Die Cast</option>
                                    <option value="clocks">Clocks / Watches</option>
                                    <option value="clothing">Clothing</option>
                                    <option value="coins">Coins</option>
                                    <option value="comics">Comics</option>
                                    <option value="electronics">Electronics / Gaming Gear</option>
                                    <option value="games">Games / Puzzles</option>
                                    <option value="glassware">Glassware</option>
                                    <option value="guitar_drum">Guitar Picks & Drum Sticks</option>
                                    <option value="halloween">Halloween Products</option>
                                    <option value="health">Health & Beauty</option>
                                    <option value="home_decor">Home Decor</option>
                                    <option value="incense_candles">Incense / Candles</option>
                                    <option value="jewelry">Jewelry</option>
                                    <option value="keychains">Keychains</option>
                                    <option value="lunch_boxes">Lunch Boxes</option>
                                    <option value="magazines">Magazines</option>
                                    <option value="magnets">Magnet / Magnet Sets</option>
                                    <option value="misc">Miscellaneous</option>
                                    <option value="ornaments">Ornaments</option>
                                    <option value="pet_supplies">Pet Supplies & Accessories</option>
                                    <option value="posters">Posters</option>
                                    <option value="stationary">Stationary Products</option>
                                    <option value="stickers_patches">Stickers / Patches</option>
                                    <option value="tickets">Tickets / Stubs</option>
                                    <option value="tour_books">Tour Books</option>
                                    <option value="trading_post_cards">Trading Cards Phone & Post Cards</option>
                                    <option value="wine">Wine</option>
                                    <option value="lighters">Zippos / Lighters</option>
                            </select>
                            <input type="submit" className='btn btn-outline-secondary' value="Send" />

                        </form>
                        <div className="logout-button">
                            {localStorage.getItem('jwtToken') &&
                                <button class="btn btn-primary" onClick={this.logout}>Logout</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;
