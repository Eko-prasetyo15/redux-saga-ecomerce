import React, { Fragment, Component } from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import { loadProduct } from '../actions';
import { connect } from 'react-redux';

class List extends Component {
    componentDidMount() {
        this.props.loadProduct()
    }

    render() {
        const listItems = this.props.product.map((item, index) => {
            console.log(item.title, "itemmm")
            return (
                <Item key={index}
                    title={item.title}
                    rate={item.description}
                    description={item.description}
                    price={item.price}
                    detailproduct={item.detailproduct}
                />
            )
        })

        return (
            <Fragment>
                <div>
                {listItems}
                    {/* <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                        <i className="fa fa-angle-right"></i>
                    </a> */}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product
})

const mapDispatchToProps = (dispatch) => ({
    loadProduct: () => dispatch(loadProduct())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)