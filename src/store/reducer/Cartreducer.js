
const initState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0
}

const Cartreducer = (state = initState, action) => {

    let findPro;
    let index;
    switch(action.type){
        case 'ADD_TO_CART':
        const {product,quantity} = action.payload;
        const check = state.products.find(pr => pr.id === product.id);
        if(check){
            return state;
        } else {
            const Tprice = state.totalPrice + product.discountPrice * quantity;
            const Tquantities = state.totalQuantities + quantity;
            product.quantity = quantity;
            return {
                ...state, products: [...state.products, product],totalPrice: Tprice, totalQuantities: Tquantities 
            }

        }
        case 'REMOVE':
        findPro = state.products.find(product => product.id === action.payload);
        const filtered = state.products.filter(product => product.id !== action.payload);
        return {
            ...state,
            products: filtered,
            totalPrice: state.totalPrice - findPro.discountPrice * findPro.quantity, totalQuantities: state.totalQuantities - findPro.quantity
        }
        default: 
        return state;
    }

}
export default Cartreducer;