import { Link } from 'react-router-dom'

import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import ItemCart from '../components/ItemCart.tsx'

type CarrinhoProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    cartItems: any[];
    setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
    username: string;
}

function Carrinho({count, cartItems, setCartItems, setCount, username} : CarrinhoProps) {

    let total = 0

    cartItems.map(item => {
        total += item.price * item.qty
    })

    return (
    <main>
        <Header count={count} username={username}/>
        <div className="d-flex flex-column">
            <h2 className="title-galerias">
                <img src="assets/imgs/icons/carrinho.png" alt="icone de novidades"/><p className="p-0 m-0 m-2 d-inline">Carrinho</p><img src="assets/imgs/icons/seta-direita.png" alt="seta para direita"/>
            </h2>
            <div className="d-flex justify-content-center box-cart-price"> 
                { cartItems.length === 0 &&
                    <article id="empty-cart-message" className="box-empyt-cart d-flex flex-column flex-wrap justify-content-center align-items-center p-5 mt-4 mb-4 mr-3 ms-0">
                        <h3>Seu carrinho está vazio</h3>
                        <Link to="/">
                            <div className="btn btn-primary mt-3">Ver produtos</div>
                        </Link>
                    </article>
                }
                { cartItems.length > 0 &&
                    <>
                    <section id="cart-itens" className="box-galeria-cart container-fluid justify-content-start d-flex flex-wrap flex-column align-items-center">
                        {cartItems.map((item, index) => (
                            <ItemCart key={item.id} index={index} name={item.name} price={item.price} src={item.src} qty={item.qty} cartItems={cartItems} setCartItems={setCartItems} setCount={setCount} count={count}/>
                        ))}
                    </section>
                    <article className="box-total-price p-3 ms-3">
                        <h3 className="h5 mb-5">Resumo do Pedido</h3>
                            <div className="d-flex justify-content-between">
                                <p>Subtotal</p>
                                <p id="subtotal-value">R$ {total.toLocaleString()}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="mb-0">Frete</p>
                                <p className="mb-0" id="shipping-value">A calcular</p>
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-between">
                                <p><strong>Total</strong></p>
                                <p id="total-value"><strong>R$ {(total.toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }))}</strong></p>
                            </div>
                            <div className="d-flex flex-column">
                                <button className="btn btn-primary mb-2" id="checkout-button">Finalizar Compra</button>
                            <Link to="/">
                                <a  rel="nofollow" target="_self" className="btn btn-secondary w-100">Continuar Comprando</a>
                            </Link>
                        </div>
                    </article>
                    </>
                }  
            </div>
        </div>
        <Footer />
    </main>
    )
}

export default Carrinho;