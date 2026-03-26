type ItemFavProps = {
    id: string;
    name: string;
    src: string;
    price: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    count: number;
    cartItems: any[];
    setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
    notif_cart: () => void;
    favoriteItems: any[];
    setFavoriteItems: React.Dispatch<React.SetStateAction<any[]>>;
    index: number;
}

function ItemFav({id, name, src, price, setCount, count, cartItems, setCartItems, notif_cart, favoriteItems, setFavoriteItems, index} : ItemFavProps) {

    function AddToCart() {
        if (cartItems.some(item => item.id === id)) {
            cartItems.map(item => {
                if (item.id === id) {
                    item.qty += 1
                }
            })
        } else {
            setCount(count + 1)
            setCartItems([...cartItems, {id: id, name: name, price: price, src: src, qty: 1}])
        }
        notif_cart()
    }

    function removeItem() {
        let TempArray = [...favoriteItems]
        TempArray.splice(index, 1)
        setFavoriteItems(TempArray)
    }

    return (
        <article className="box-products" id={id}>
                <h3 className="title-products">{name}</h3>
                <img className="products" src={src} alt={name}/>
            <div className="box-text-products">
                <p className="price">{price}</p>
                <div>
                    <input className="comprar" id={"comprar-" + id} type="button" value="Comprar"/>
                    <label className="box-comprar-button" htmlFor={"comprar-" + id}><img onClick={AddToCart} className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                    <button className="favoriter-button"><img onClick={removeItem} className="remove-favorite" src="assets/imgs/icons/favorite-button-remove.png" alt="botão de favoritar"/></button>
                </div>
            </div>            
        </article>
    )
}

export default ItemFav