// start load todo data
export const loadProductSuccess = (product) => ({
    type: 'LOAD_PRODUCT_SUCCESS',
    product,
})

export const loadProductFailure = () => ({
    type: 'LOAD_PRODUCT_FAILURE'
})

export const loadProduct = () => ({
    type: 'LOAD_PRODUCT'
})



// end load todo data

// start post todo data

export const postProductSuccess = (product) => ({
    type: 'POST_PRODUCT_SUCCESS',
    product
})

export const postProductFailure = (id) => ({
    type: 'POST_PRODUCT_FAILURE', id
})

export const postProductRedux = (title, description, price, brand, detailproduct) => ({
    type: 'POST_PRODUCT', title, description, price, brand, detailproduct
})

export const postProduct = (title, description,price, brand, detailproduct) => ({
    type: 'ADD_PRODUCT', title, description, price, brand, detailproduct
})



// end delete todo data

export const resendProduct = (title, description, price, brand, detailproduct) => ({
    type: 'RESEND_PRODUCT', title, description, price,brand, detailproduct
})