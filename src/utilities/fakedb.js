// use local storage to manage cart data

    const getOpen=()=>{
        let open;

    //get the shopping cart from local storage
    const openValue = localStorage.getItem('open');
    if(openValue){
        open = JSON.parse(openValue);
        open=false
    }else{
        localStorage.setItem('open',false);
    }
   

    }
const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
    
    removeFromDb,
    getOpen,
    deleteShoppingCart
}