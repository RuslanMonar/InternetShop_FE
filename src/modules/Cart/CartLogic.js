
import api from './../Auth/ApiAxios';


export const loadCart = (setCart , setCartLoader , setCartTotalPrice) => {
    setCartLoader(true);
    api().get('/sanctum/csrf-cookie').then(response => {
        api().post("/api/load-cart").then(result => {
            setCartLoader(false);
            let cart = result.data.cart;
            let total_price = 0;
            cart.forEach(item => {
                total_price += item.total_price;
            });
            setCart(cart);
            setCartTotalPrice(total_price);
        })
    });
}

export const delteItemFromCart = (id , CartFunctions) => {
    CartFunctions.setCartLoader(true);
    let data = {id}
    api().get('/sanctum/csrf-cookie').then(response => {
        api().post("/api/delete-from-cart" , data).then(result => {
            loadCart(CartFunctions.setCart , CartFunctions.setCartLoader , CartFunctions.setCartTotalPrice);
        })
    });
}

export const IncreaseQuantity = (id , CartFunctions) => {
    CartFunctions.setCartLoader(true);
    let data = {id}
    api().get('/sanctum/csrf-cookie').then(response => {
        api().post("/api/increase-quantity" , data).then(result => {
            loadCart(CartFunctions.setCart , CartFunctions.setCartLoader , CartFunctions.setCartTotalPrice);
        })
    });
}

export const DecreaseQuantity = (id , CartFunctions) => {
    CartFunctions.setCartLoader(true);
    let data = {id}
    api().get('/sanctum/csrf-cookie').then(response => {
        api().post("/api/decrease-quantity" , data).then(result => {
            loadCart(CartFunctions.setCart , CartFunctions.setCartLoader , CartFunctions.setCartTotalPrice);
        })
    });
}

export const ChangeQuantityValue = (id , quantity , CartFunctions) => { 
    CartFunctions.setCartLoader(true);
    let data = {id , quantity}
    api().get('/sanctum/csrf-cookie').then(response => {
        api().post("/api/change-quantity-value" , data).then(result => {
            loadCart(CartFunctions.setCart , CartFunctions.setCartLoader , CartFunctions.setCartTotalPrice);
            
        })
    });
}

export const CountProductInCart = (setProductsInCart) => {
    api().get('/sanctum/csrf-cookie').then(response => {
        api().post("/api/count-products-in-cart").then(result => {
            setProductsInCart(result.data.quantity);
        })
    });
}