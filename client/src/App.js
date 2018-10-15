import React, { Component } from 'react';
import './App.css';
import Logo from './images/logo.jpg';
import Tumblr from "./images/tumblr.png";
import Twitter from "./images/twitter-48.png";
import Blogger from "./images/blogger-5-48.png";
import HeaderImg from "./images/header.jpg";
import Routes from './routes';
class App extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            results: []
        }
    }
    onChange(e) {
        this.setState({ value: e.target.value });
        console.log(this.state.value);
    }
    render() {
        const { results, value } = this.state;
        return (
            <div className="App">
                <div className="container-fluid">
                    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="/"><img src={Logo} alt="logo" width="80px" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="http://kollectingkiss.tumblr.com/"><img src={Tumblr} alt="tumblr" width="24px" height="24px" /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="http://twitter.com/KollectingKiss"><img src={Twitter} alt="twitter" width="24px" height="24px" /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href=" http://kollectingkiss.blogspot.com/"><img src={Blogger} className="blogger-pic" alt="blogspot" width="24px" height="24px" /></a>
                                </li>
                                <li className="nav-item active dropdown">
                                    <a className="nav-link dropdown-toggle scrollable-menu"
                                        id="navbarDropdown" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">Categories</a>
                                    <div className="dropdown-menu pre-scrollable"
                                        aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="customers">customers</a>
                                        <a className="dropdown-item" href="hi">hi</a>
                                        <a className="dropdown-item" href="action_figures">Action Figures / Dolls</a>
                                        <a className="dropdown-item" href="advertising_ads">Advertising Ads</a>
                                        <a className="dropdown-item" href="artwork_busts">Artwork / Busts</a>
                                        <a className="dropdown-item" href="backstage_passes">Backstage Passes</a>
                                        <a className="dropdown-item" href="bags">Bags / Backpacks / Wallets</a>
                                        <a className="dropdown-item" href="belt_buckles">Belt Buckles</a>
                                        <a className="dropdown-item" href="blankets">Blankets / Rugs / Towels</a>
                                        <a className="dropdown-item" href="books">Books</a>
                                        <a className="dropdown-item" href="buttons">Buttons / Lapel Pins</a>
                                        <a className="dropdown-item" href="calendars">Calendars</a>
                                        <a className="dropdown-item" href="auto_accessories">Car Automobile Accessories</a>
                                        <a className="dropdown-item" href="cars">Cars / Die Cast</a>
                                        <a className="dropdown-item" href="clocks">Clocks / Watches</a>
                                        <a className="dropdown-item" href="clothing">Clothing</a>
                                        <a className="dropdown-item" href="coins">Coins</a>
                                        <a className="dropdown-item" href="comics">Comics</a>
                                        <a className="dropdown-item" href="electronics">Electronics / Gaming Gear</a>
                                        <a className="dropdown-item" href="games">Games / Puzzles</a>
                                        <a className="dropdown-item" href="glassware">Glassware</a>
                                        <a className="dropdown-item" href="guitar_drum">Guitar Picks & Drum Sticks</a>
                                        <a className="dropdown-item" href="halloween">Halloween Products</a>
                                        <a className="dropdown-item" href="health">Health & Beauty</a>
                                        <a className="dropdown-item" href="home_decor">Home Decor</a>
                                        <a className="dropdown-item" href="incense_candles">Incense / Candles</a>
                                        <a className="dropdown-item" href="jewelry">Jewelry</a>
                                        <a className="dropdown-item" href="keychains">Keychains</a>
                                        <a className="dropdown-item" href="lunch_boxes">Lunch Boxes</a>
                                        <a className="dropdown-item" href="magazines">Magazines</a>
                                        <a className="dropdown-item" href="magnets">Magnet / Magnet Sets</a>
                                        <a className="dropdown-item" href="misc">Miscellaneous</a>
                                        <a className="dropdown-item" href="ornaments">Ornaments</a>
                                        <a className="dropdown-item" href="pet_supplies">Pet Supplies & Accessories</a>
                                        <a className="dropdown-item" href="posters">Posters</a>
                                        <a className="dropdown-item" href="stationary">Stationary Products</a>
                                        <a className="dropdown-item" href="stickers_patches">Stickers / Patches</a>
                                        <a className="dropdown-item" href="tickets">Tickets / Stubs</a>
                                        <a className="dropdown-item" href="tour_books">Tour Books</a>
                                        <a className="dropdown-item" href="trading_post_cards">Trading Cards Phone & Post Cards</a>
                                        <a className="dropdown-item" href="wine">Wine</a>
                                        <a className="dropdown-item" href="lighters">Zippos / Lighters</a>
                                    </div>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2"
                                    type="text"
                                    onChange={e => this.onChange(e)}
                                    placeholder="Search"
                                    aria-label="Search" />
                                <a href={value.trim().toString(this)} >
                                    <button className="btn btn-outline-secondary my-2 my-sm-0"
                                        // href={value.trim().toString(this)}
                                        // hi={console.log(value.trim().toString())}
                                        type="submit">Search</button></a>
                            </form>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="header" src={HeaderImg} alt="header" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="routes-rendered-here">
                                <Routes />
                            </div>
                        </div>
                    </div>
                </div>
                <footer>&#9400; 2007-2018 Kollecting KISS | All rights reserved.</footer>   
                <footer><a className="light" href="/admin">[Admin]</a></footer>
            </div>
        );
    }
}

export default App;
