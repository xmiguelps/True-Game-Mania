import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom'

import Header from "../components/Header"
import Footer from "../components/Footer"
import ItemFav from "../components/ItemFav"

type FavoritosProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    favoriteItems: any[];
    setFavoriteItems: React.Dispatch<React.SetStateAction<any[]>>;
    cartItems: any[];
    setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
    NotifCart: boolean;
    showNotif_cart: () => void;
}

function Favoritos({count, favoriteItems, setFavoriteItems, setCount, cartItems, setCartItems, NotifCart, showNotif_cart} : FavoritosProps) {

    type NotifProps = {
        visible: boolean;
    }

    function Notif_msg_cart({ visible } : NotifProps) {
        return createPortal(
            <div id="toast-message" className={visible ? 'show' : ''}>
                Produto adicionado ao carrinho!
            </div>,
            document.body
        )
    }

    return (
        <main>
            <Notif_msg_cart visible={NotifCart} />
            <Header count={count}/>
            <div className="d-flex flex-column">
                <h2 className="title-galerias">
                    <img src="assets/imgs/icons/heart.png" alt="icone de novidades"/><p className="p-0 m-0 m-2 d-inline">Favorites</p><img src="assets/imgs/icons/seta-direita.png" alt="seta para direita"/>
                </h2>
                <div className="d-flex justify-content-center box-cart-price">
                    <section className="box-galeria-favorite d-flex w-auto flex-wrap container-fluid justify-content-center align-items-center">
                        { favoriteItems.length === 0 && 
                            <article id="empty-favorite-message" className="box-empyt-favorite d-flex flex-column flex-wrap w-auto align-items-center">
                                <h3 className="h4">Não possui nada em seus favoritos</h3>
                                <Link to="/">
                                    <div className="btn btn-primary mt-3">Ver produtos</div>
                                </Link> 
                            </article>
                        }
                        <div className="d-flex flex-wrap" id="favorite-itens">
                            { favoriteItems.length > 0 &&
                                <>
                                    {favoriteItems.map((item, index) => (
                                        <ItemFav 
                                        key={item.id}
                                        index={index} 
                                        id={item.id} 
                                        name={item.name} 
                                        src={item.src} 
                                        price={item.price}
                                        favoriteItems={favoriteItems}
                                        setFavoriteItems={setFavoriteItems}
                                        count={count}
                                        setCount={setCount}
                                        cartItems={cartItems}
                                        setCartItems={setCartItems}
                                        notif_cart={showNotif_cart}
                                        />
                                    ))}
                                </>
                            }
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </main>        
    )
}

export default Favoritos