import Item from "../components/Item";
import Header from "../components/Header"
import Footer from "../components/Footer"
import produtos from "../contexts/produtos";

import { useEffect, type Dispatch } from "react";
import { createPortal } from "react-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

function Notif_msg_fav({ visible } : NotifProps) {
    return createPortal(
        <div id="toast-message" className={visible ? 'show' : ''}>
            Produto adicionado aos favoritos!
        </div>,
        document.body
    )
}

function Notif_msg_fav2({ visible } : NotifProps) {
    return createPortal(
        <div id="toast-message" className={visible ? 'show' : ''}>
            Produto já esta nos favoritos!
        </div>,
        document.body
    )
}

type HomeProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    cartItems: any[];
    setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
    favoriteItems: any[];
    setFavoriteItems: React.Dispatch<React.SetStateAction<any[]>>;
    NotifCart: boolean;
    showNotif_cart: () => void;
    username: string;
}

function Home({count, setCount, cartItems, setCartItems, favoriteItems, setFavoriteItems, NotifCart, showNotif_cart, username} : HomeProps) {

    const [NotifFav, setNotifFav] = useState(false)
    function showNotif_fav() {
        setNotifFav(true)
        setTimeout(() => {
            setNotifFav(false)
        }, 3000);
    }

    const [NotifFav2, setNotifFav2] = useState(false)
    function showNotif_fav2() {
        setNotifFav2(true)
        setTimeout(() => {
            setNotifFav2(false)
        }, 3000);
    }

    const navigate = useNavigate();

    useEffect(() => {

        if (!username) {
            navigate("/login");
        }

        const searchButton = document.querySelector('.search-button');
        const searchinput = document.querySelector('.search');
        const galerias = document.querySelectorAll('.box-galeria');

        if (searchButton) {
            searchButton.addEventListener('click', (event) => {
                event.preventDefault();
                if (searchinput &&  galerias) {
                    const searchTerm = (searchinput as HTMLInputElement).value.toLowerCase();
                    galerias.forEach(galeria => {
                        const products = galeria.querySelectorAll('.box-products');
                        products.forEach(product => {
                            let titleElement = product.querySelector('.title-products');
                            const productName = titleElement?.textContent?.toLocaleLowerCase() || '';
                            const el = product as HTMLElement;
                            if (productName.includes(searchTerm)) {
                                el.style.visibility = 'visible';
                                el.style.position = 'static';
                            } else {
                                el.style.visibility = 'hidden';
                                el.style.position = 'absolute';
                            }
                        });
                    }); 
                };
            });
        }

    }, []);

    return (
        <>
        <Header count={count} username={username}/>
        <Notif_msg_cart visible={NotifCart} />
        <Notif_msg_fav visible={NotifFav} />
        <Notif_msg_fav2 visible={NotifFav2} />

        <main>
        <section>
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="assets/imgs/banners/banner-1.jpg" className="d-block w-100" alt="banner de destaques"/>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/imgs/banners/banner-2.jpg" className="d-block w-100" alt="banner de destaques"/>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/imgs/banners/banner-3.webp" className="d-block w-100" alt="banner de destaques"/>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/imgs/banners/banner-4.jpg" className="d-block w-100" alt="banner de destaques"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
        <section className="d-flex flex-column">
            <h2 className="title-galerias">
                <img src="assets/imgs/icons/destaques.png" alt="icone de novidades"/> Destaques <img src="assets/imgs/icons/seta-direita.png" alt="seta para direita"/>
            </h2>
            <p className="text-galerias">Veja aqui os produtos mais vendidos em nossa loja:</p>
            <div className="d-flex justify-content-center">
                <article className="box-galeria-destaques mt-4 me-3 mb-0 ms-3 d-flex justify-content-evenly flex-wrap w-auto container-fluid">
                    {produtos.produtos_destaques.map(produto => (
                        <Item key={produto.id} 
                        name={produto.name} 
                        price={produto.price} 
                        src={produto.src} 
                        count={count} 
                        setCount={setCount}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        id={produto.id}
                        notif_cart={showNotif_cart}
                        favoriteItems={favoriteItems}
                        setFavoriteItems={setFavoriteItems}
                        notif_fav={showNotif_fav}
                        notif_fav2={showNotif_fav2}
                        />
                    ))}
                </article>
            </div>
        </section>
        <section>
            <h2 className="title-galerias">
                <img src="assets/imgs/icons/novidades.png" alt="icone de novidades"/> Novidades <img src="assets/imgs/icons/seta-direita.png" alt="seta para direita"/>
            </h2>
            <p className="text-galerias">Veja aqui os produtos recentementes adicionados á nossa loja:</p>
            <article className="box-novidades flex-wrap justify-content-center align-items-center d-flex container-fluid">
                <img className="d-block banner-novidades" src="assets/imgs/banners/banner-novidades-1.jpg" alt="banner de novidades"/>
                <img className="d-block banner-novidades" src="assets/imgs/banners/banner-novidades-2.jpg" alt="banner de novidades"/>
                <img className="d-block banner-novidades" src="assets/imgs/banners/banner-novidades-3.jpg" alt="banner de novdidades"/>
            </article>
        </section>
        <section>
            <div className="d-flex flex-column">
                <h2 className="title-galerias">
                    <img src="assets/imgs/icons/products.png" alt="icone de novidades"/> Galeria de produtos <img src="assets/imgs/icons/seta-direita.png" alt="seta para direita"/>
                </h2>
                <p className="text-galerias">Veja aqui diversos produtos que a Game Mania pode te oferecer:</p>
                <div className="d-flex justify-content-center">
                    <article className="box-galeria container-fluid">
                        {produtos.produtos_galeria.map(produto => (
                            <Item key={produto.id} 
                            name={produto.name} 
                            price={produto.price} 
                            src={produto.src}
                            count={count} 
                            setCount={setCount}
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                            id={produto.id}
                            notif_cart={showNotif_cart}
                            favoriteItems={favoriteItems}
                            setFavoriteItems={setFavoriteItems}
                            notif_fav={showNotif_fav}
                            notif_fav2={showNotif_fav2}
                            />
                        ))}
                    </article>
                </div>
            </div>
        </section>
        <Footer />
    </main>
    </>
    )       
}

export default Home;