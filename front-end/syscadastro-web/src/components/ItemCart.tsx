type ItemCartProps = {
    name: string;
    src: string;
    qty: number;
    price: number;
    index: number;
    cartItems: any[];
    setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

function ItemCart({name, src, qty, price, index, setCartItems, cartItems, setCount, count} : ItemCartProps) {

    function removeItem() {
        let TempArray = [...cartItems]; //copia
        TempArray.splice(index, 1); //exclui 1 a partir do index
        setCartItems(TempArray);
        setCount(count - 1)  
    }

    function mais_1() {
        let TempArray = [...cartItems] //copia
        TempArray[index] = {...TempArray[index], qty: qty+1} //vai no index certo, copia oque ja ta la e muda só o qty
        setCartItems(TempArray)
    }

    function menos_1() {
        if (qty > 1) {
            let TempArray = [...cartItems] //copia
            TempArray[index] = {...TempArray[index], qty: qty-1} //vai no index certo, copia oque ja ta la e muda só o qty
            setCartItems(TempArray)
        }
    }

    return (
        <article className="product-cart d-flex align-items-start p-4 m-2">
            <div className="box-cart d-flex align-items-center justify-content-between w-100">
                <div className="d-flex align-items-center"> 
                    <img className="img-product-cart mx-2" src={src} alt={name}/> 
                <span>{name}</span> 
                </div> 
                <div className="d-flex box-cart"> 
                    <div className="d-flex align-items-center box-input"> 
                        <button className="c-white btn-plus" onClick={mais_1} >+</button> 
                        <input className="qty-input text-end" type="number" min="1" value={qty}/> 
                        <button className="c-white btn-minus" onClick={menos_1}>-</button> 
                    </div>
                    <div className="d-flex align-items-center w-auto"> 
                        <span className="line-total"><strong>R${(price * qty).toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}</strong></span> 
                    </div>
                    <div className="d-flex align-items-center ms-2"> 
                        <a className="text-danger remove-item" onClick={removeItem}>Remover</a> 
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ItemCart