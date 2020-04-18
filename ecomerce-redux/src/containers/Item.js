import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';



export default function Item(props) {

    return (
        <Fragment>
             <div className="col-sm-3">
            <div className="thumb-wrapper">
                <Link to="/overview">
                    <div className="img-box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ21cVcyL3t60mDtycMSc4ArcXVF5lX1k2-GGblAbqO08_A5upO&usqp=CAU" className="img-responsive img-fluid" alt="" />
                    </div>
                </Link>
                <div className="thumb-content">
                    <h4>{props.title} </h4>
                    <p className="item-price"><strike></strike><span>{props.price}</span></p>
                    <p className="item-price"><strike></strike><span>{props.brand}</span></p>
                    <p className="item-price"><strike></strike><span>{props.description}</span></p>
                    <div className="star-rating">
                        <ul className="list-inline">
                            <li className="list-inline-item">{props.rate}<i className="fa fa-star"></i></li>
                        </ul>
                    </div>
                    <a href="#" className="btn btn-dark">Add to Cart</a>
                </div>
            </div>
        </div>
        </Fragment >
    )
}


