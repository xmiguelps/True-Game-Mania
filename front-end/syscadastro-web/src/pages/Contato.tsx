import { Link } from "react-router-dom"

function Contato() {
    return (
    <main className="w-100 h-100 d-flex justify-content-center align-items-center">
        <section className="box-nos-contate d-flex flex-column align-items-center">
            <div className="d-flex justify-content-start w-100">
                <Link to="/">
                    <div className="back-button m-2 mb-0 text-decoration-none">
                        <img src="assets/imgs/icons/seta-esquerda.png" alt=""/><p className="text-white d-inline m-1">Voltar</p>
                    </div>
                </Link>
            </div>
            <figure className="mt-1"><img src="assets/imgs/icons/logo-loja.png" alt=""/></figure>
            <article>
                <div className="mt-4 d-flex flex-column align-items-center">
                    <div className="box-contate d-flex align-items-center mb-2">
                        <img className="icons-contate" src="assets/imgs/icons/phone-2.png" alt="icone de telefone"/>
                        <p className="m-0 ms-3 fs-5">13-1234-5678</p>
                    </div>
                    <div className="box-contate d-flex align-items-center mb-2">
                        <img className="icons-contate" src="assets/imgs/icons/email.png" alt="icone de email"/>
                        <p className="m-0 ms-3 fs-5">contatoempresa@gmail.com</p>
                    </div>
                    <div className="box-contate d-flex align-items-center mb-2">
                        <img className="icons-contate" src="assets/imgs/icons/local.png" alt="icone de localização"/>
                        <p className="m-0 ms-3 fs-5">Rua Game Mania Santos, 123</p>
                    </div>
                </div>
            </article>
            <article>
                <div className="box-redes d-flex">
                    <hr className="hr-login"/>
                    <p>Redes Sociais</p>
                    <hr className="hr-login"/>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <a href="#" className="box-redes-contate m-2 d-flex align-items-center">
                        <button className="btn-redes-sociais m-2"><img className="img-contate" src="assets/imgs/icons/instagram-2.png" alt="icone do instagram"/></button>
                        <p className="m-0">@GameMania</p>
                    </a>
                    <a href="#" className="box-redes-contate m-2 d-flex align-items-center">
                        <button className="btn-redes-sociais m-2"><img className="img-contate" src="assets/imgs/icons/facebook.png" alt="icone do facebook"/></button>
                        <p className="m-0">Game_Mania</p>
                    </a>
                    <a href="#" className="box-redes-contate m-2 d-flex align-items-center">
                        <button className="btn-redes-sociais m-2"><img className="img-contate" src="assets/imgs/icons/twitter-2.png" alt="icone do twitter"/></button>
                        <p className="m-0">@GameMania_</p>
                    </a>
                </div>
            </article>
            <article>

            </article>
        </section>
    </main>
    )
}

export default Contato