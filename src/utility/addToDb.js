const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    }
    return [];
}

const addTOStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list', storedListStr);
    }
}

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    }
    return [];
}

const addTOStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
    }
}

export { addTOStoredCartList, addTOStoredWishList, getStoredCartList, getStoredWishList }