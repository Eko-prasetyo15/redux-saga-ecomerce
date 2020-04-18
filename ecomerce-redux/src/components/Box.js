import { Link } from 'react-router-dom';
import React, { Component } from 'react';
// import Item from "../containers/Item";
import List from "../containers/List"
import Header from "./Header";

export default class Box extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Trending <b>Products</b></h2>
                        </div>
                    </div>
                </div>
                <Link to="/add" className="no-underline">
                    <button className="btn btn-secondary mb-3 btn-block rounded-1">
                        <i className="fas fa-plus mr-sm-2"></i>Add New Product
                    </button>
                </Link>
                <div className="carousel-inner">
                    <div className="item carousel-item active">
                       
                        <List />
                        
                    </div>
                </div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                </div>
                <br></br>
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link text-dark" href="/">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link text-dark" href="/">1</a></li>
                        <li className="page-item disabled">
                            <a className="page-link text-dark" href="/">Next</a>
                        </li>
                    </ul>
                </nav>
                <footer className="mt-5">
                    <hr />
                    <p className="lead pb-3 small text-center">
                        @ Made by Abushanum
                    </p>
                </footer>
            </div>
        );
    }
}
