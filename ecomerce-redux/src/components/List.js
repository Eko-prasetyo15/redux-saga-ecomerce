import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

export default function List(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Trending <b>Products</b></h2>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">

                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item carousel-item active">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="thumb-wrapper">
                                            <div className="img-box">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ21cVcyL3t60mDtycMSc4ArcXVF5lX1k2-GGblAbqO08_A5upO&usqp=CAU" className="img-responsive img-fluid" alt="" />
                                            </div>
                                            <div className="thumb-content">
                                                <h4>BMW series E90</h4>
                                                <p className="item-price"><strike>$400.00</strike> <span>$369.00</span></p>
                                                <div className="star-rating">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                                <a href="#" className="btn btn-dark">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="thumb-wrapper">
                                            <div className="img-box">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJYzPSntRXkfYD5Q9eoWMxgN9ReHna0fJaqFnvwRU9yg2XcMCv&usqp=CAU" className="img-responsive img-fluid" alt="" />
                                            </div>
                                            <div className="thumb-content">
                                                <h4>BMW 328i</h4>
                                                <p className="item-price"><strike>$25.00</strike> <span>$23.99</span></p>
                                                <div className="star-rating">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                                <a href="#" className="btn btn-dark">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="thumb-wrapper">
                                            <div className="img-box">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjEpyRpi2_ZTdBZxwweGZpNJh-5g1vDmkF6sA8_ZHsOQRX9NOT&usqp=CAU" className="img-responsive img-fluid" alt="" />
                                            </div>
                                            <div className="thumb-content">
                                                <h4>BMW 316i</h4>
                                                <p className="item-price"><strike>$899.00</strike> <span>$649.00</span></p>
                                                <div className="star-rating">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
                                                    </ul>
                                                </div>
                                                <a href="#" className="btn btn-dark">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="thumb-wrapper">
                                            <div className="img-box">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ21cVcyL3t60mDtycMSc4ArcXVF5lX1k2-GGblAbqO08_A5upO&usqp=CAU" className="img-responsive img-fluid" alt="" />
                                            </div>
                                            <div className="thumb-content">
                                                <h4>BMW 4B1</h4>
                                                <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                                                <div className="star-rating">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                </div>
                                                <a href="#" className="btn btn-dark">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                            <i className="fa fa-angle-left"></i>
                        </a>
                        <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


