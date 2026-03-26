type ItemProps = {
    name: string;
    price: number;
    src: string;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    cartItems: any[];
    setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
    id: number;
    notif_cart: () => void;
    notif_fav: () => void;
    notif_fav2: () => void;
    favoriteItems: any[];
    setFavoriteItems: React.Dispatch<React.SetStateAction<any[]>>
}

function Item({name, price, src, count, setCount, cartItems, setCartItems, id, notif_cart, notif_fav, notif_fav2, favoriteItems, setFavoriteItems} : ItemProps ) {

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
    
    function AddToFav() {
        if (favoriteItems.some(item => item.id === id)) {
            notif_fav2()
        } else {
            setFavoriteItems([...favoriteItems, {id: id, name: name, price: price, src: src}])
            notif_fav()
        }
    }

    return (
        <div className="box-products">
            <h3 className="title-products">{name}</h3>
            <img className="products" src={src} alt={name}/>
            <br/>
            <div className="box-text-products">
                <p className="price">R${price.toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}</p>
                <div>
                    <input className="comprar" id={id.toString()} type="button" value="Comprar"/>
                    <label className="box-comprar-button" htmlFor={id.toString()}><img onClick={AddToCart} className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                    <button className="favoriter-button"><img onClick={AddToFav} className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                </div>
            </div>
        </div>
    )
}

export default Item