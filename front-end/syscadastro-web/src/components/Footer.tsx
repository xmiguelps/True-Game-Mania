function Footer() {
    return(
        <footer>
            <section className="box-rodape mt-5 p-4 d-flex justify-content-evenly h-auto flex-wrap">
                <article className="box-text-rodape">
                    <h2 className="mb-2">Sobre nós</h2>
                    <hr/>
                    <div>
                        <p className="text-rodape">Somos uma empresa de hadwares, aparelhos e perifericos e produtos voltados para a tecnologia e jogos.</p>
                    </div>
                </article>
                <article className="box-text-rodape">
                    <h2 className="mb-2">Suporte</h2>
                    <hr/>
                    <div className="d-flex flex-column">
                        <div className="d-flex">
                            <img className="icons-rodape me-2" src="assets/imgs/icons/phone.png" alt="icone de telefone"/>
                            <p>13-1234-5678</p>
                        </div>
                        <div className="d-flex">
                            <img className="icons-rodape me-2" src="assets/imgs/icons/email.png" alt="icone de email"/>
                            <p>contatoempresa@gmail.com</p>
                        </div>
                        <div className="d-flex">
                            <img className="icons-rodape me-2" src="assets/imgs/icons/local.png" alt="icone de localização"/>
                            <p>Rua Game Mania Santos, 123</p>
                        </div>
                    </div>
                </article>
                <article className="box-patrocinadores">
                    <h2 className="mb-2">Patrocinadores</h2>
                    <hr/>
                    <div className="box-imgs-patrocinadores">
                        <img className="m-2" src="assets/imgs/patrocinadores/patrocinador-acer.png" alt="patrocinador acer"/>
                        <img className="m-2" src="assets/imgs/patrocinadores/patrocinador-apple.png" alt="patrocinador apple"/>
                        <img className="m-2" src="assets/imgs/patrocinadores/patrocinador-asus.png" alt="patrocinador asus"/>
                        <img className="m-2" src="assets/imgs/patrocinadores/patrocinador-dell.png" alt="patrocinador dell"/>
                        <img className="m-2" src="assets/imgs/patrocinadores/patrocinador-msi.png" alt="patrocinador msi"/>
                        <img className="m-2" src="assets/imgs/patrocinadores/patrocinador-ROG.png" alt="patrocinador ROG"/>
                    </div>
                </article>
            </section>
            <section className="box-final-rodape w-100 pb-0 d-flex justify-content-between align-items-center pt-4">
                <figure><img className="logo-rodape" src="assets/imgs/icons/logo-loja.png" alt="logo da loja"/></figure>
                <p className="copyright">&copy; 2025 Game Mania. Todos os direitos reservados.</p>
                <figure className="box-rede-social">
                    <a href="#"><img className="rede-social instagram" src="assets/imgs/icons/instagram-logo.png" alt="icone do instagram que leva para a rede social da loja"/></a>
                    <a href="#"><img className="rede-social facebook" src="assets/imgs/icons/facebook-logo.png" alt="icone do facebook que leva para a rede social da loja"/></a>
                    <a href="#"><img className="rede-social twitter" src="assets/imgs/icons/twitter-logo.png" alt="icone do twitter que leva para a rede social da loja"/></a>
                </figure>
            </section>
        </footer>
    )
}

export default Footer