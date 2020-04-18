import React, { Component } from 'react';
import { postProduct } from '../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            title: "",
            rate: "",
            description: "",
            price: "",
            brand: "",
            detailproduct: ""
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleBrandChange = this.handleBrandChange.bind(this);
        this.handleDetailproductChange = this.handleDetailproductChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleRateChange(event) {
        this.setState({ rate: event.target.value });
    }
    handleDescriptionChange(event) {
        this.setState({ description: event.target.value });
    }
    handlePriceChange(event) {
        this.setState({ price: event.target.value });
    }
    handleBrandChange(event) {
        this.setState({ brand: event.target.value });
    }
    handleDetailproductChange(event) {
        this.setState({ detailproduct: event.target.value });
    }
    handleSubmit(event) {
        this.props.postProduct(this.state.title, this.state.rate, this.state.description, this.state.price, this.state.brand, this.state.detailproduct)
        this.setState({ title: "", rate: "", description: "", price: "", brand: "", detailproduct: "" });
        event.preventDefault();
    }

    render(){
        console.log(this.state, 'ini props')
        return (
            <div className="container pt-4">
                <div className="card shadow">
                    <div className="card-body">
                        <h5 className="mb-0">
                            Add New Product
                        </h5>
                        <small className="text-muted">Detail your products and make them interested.</small>
                        <hr />
                        <form className="mt-4" onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="title" value={this.state.title} onChange={this.handleTitleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="rate" className="col-sm-2 col-form-label">Rate</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" id="rate" value={this.state.rate} onChange={this.handleRateChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                <div className="col-sm-10">
                                    <textarea type ="text" className="form-control" id="description" rows="3" value={this.state.description} onChange={this.handleDescriptionChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                                <div className="input-group col-sm-10">
                                    <div className="input-group-prepend">
                                        
                                    </div>
                                    <div className="input-group-text">Rp</div>
                                    <input type="number" className="form-control" id="price" value={this.state.price} onChange={this.handlePriceChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="title" className="col-sm-2 col-form-label">Brand</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="brand" value={this.state.brand} onChange={this.handleBrandChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="detail-product" className="col-sm-2 col-form-label">Detail Product</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" id="detail-product" rows="3" value={this.state.detailproduct} onChange={this.handleDetailproductChange}></textarea>
                                </div>
                            </div>
                            <a className="btn btn-success" type="submit" value="Submit">
                                <i className="fa fa-save mr-sm-2"></i>Save
                            </a>
                            <Link to="/">
                                <button className="btn">
                                    Cancel
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    }
    const mapDispatchToProps = dispatch => ({
        postProduct: (title, rate, description, price, brand, detailproduct) => 
        dispatch(postProduct(title, parseInt(rate), description, parseInt(price), brand, detailproduct))
    })
    
    export default connect(
        null,
        mapDispatchToProps
    )(Form)