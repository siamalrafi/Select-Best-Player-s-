// This is the Fake DB.
const addToDb = id => {
    let cartInfo;

    const storedCard = localStorage.getItem('cart-info');
    if (storedCard) {
        cartInfo = JSON.parse(storedCard);
    } else {
        cartInfo = {};
    }

    const quantity = cartInfo[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        cartInfo[id] = newQuantity;
    } else {
        cartInfo[id] = 1;
    }
    localStorage.setItem('cart-info', JSON.stringify(cartInfo))
}

export { addToDb };