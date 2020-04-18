const product = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_PRODUCT_SUCCESS':
            // console.log(action.product, "ini loaaddddd ")
            return action.product
          

        case 'POST_PRODUCT':
            return [...state,
                {
                    title: action.title,
                    rate: action.rate,
                    description: action.description,
                    price: action.price,
                    brand: action.brand,
                    detailproduct: action.detailproduct,
                    sent: true
                }
            ]
        case 'POST_PRODUCT_SUCCES':
            return state.map((item => {
                if (item.id === action.product.id) {
                    item.sent = true
                }
                return item
            })
            )
        case 'POST_PRODUCT_FAILURE':
            default:
            return state
    }
}

export default product;