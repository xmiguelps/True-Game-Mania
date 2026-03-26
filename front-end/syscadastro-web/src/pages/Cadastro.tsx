import { Link } from "react-router-dom";

function Cadastro() {
    
    const CadUser = async (e:any) => {
        e.preventDefault();

        try {
            const Name = (document.querySelector('#nome') as HTMLInputElement).value;
            const Sobrenome = (document.querySelector('#sobrenome') as HTMLInputElement).value;
            const Cpf = (document.querySelector('#cpf') as HTMLInputElement).value;
            const Email = (document.querySelector('#email') as HTMLInputElement).value;
            const Senha = (document.querySelector('#senha') as HTMLInputElement).value;

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/Users`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        FirstName: Name,
                        LastName: Sobrenome,
                        Cpf: Cpf,
                        Email: Email,
                        Senha: Senha
                    })
                }
            )
            console.log("Resposta da API: " + response);
        } catch (error) {
            console.log("Erro ao criar usuario: " + error)
        }
    }

    return (
        <div className="body-login p-0 m-0">
            <main className="d-flex justify-content-center align-items-center w-100 h-100">
                <section className="box-cad d-flex flex-column align-items-center">
                    <div className="d-flex justify-content-start w-100">
                        <Link to="/">
                            <div className="back-button m-2 mb-0 text-decoration-none">
                                <img src="assets/imgs/icons/seta-esquerda.png" alt=""/><p className="text-white d-inline m-1">Voltar</p>
                            </div>
                        </Link>
                    </div>
                    <figure className="mt-5"><img src="assets/imgs/icons/logo-loja.png" alt=""/></figure>
                    <article>
                        <form action="#" className="d-flex flex-column align-items-left mt-3">
                            <div className="d-flex gap-5">
                            </div>
                            <div className="d-flex">
                                <label htmlFor="nome"><img className="cad-img" src="assets/imgs/icons/login.png" alt="icone de login"/></label>
                                <div className="d-flex flex-column">
                                    <p className="m-0 ms-2"><strong>Nome</strong><span className="color-red">*</span></p>
                                    <input className="input-cad ps-2 m-2" type="text" name="nome" id="nome"/>
                                </div>
                                <div className="d-flex flex-column">
                                    <p className="m-0 ms-2"><strong>Sobrenome</strong><span className="color-red">*</span></p>
                                    <input className="input-cad ps-2 m-2" type="text" name="sobrenome" id="sobrenome" placeholder=""/>
                                </div>
                            </div>
                            <div className="d-flex">
                                <label htmlFor="cpf"><img className="cad-img" src="assets/imgs/icons/cpf.png" alt="icone de cpf"/></label>
                                <div className="d-flex flex-column">
                                    <p className="m-0 ms-2"><strong>CPF</strong><span className="color-red">*</span></p>
                                    <input className="input-cad ps-2 m-2" type="text" name="cpf" id="cpf" placeholder="111.222.333-00"/>
                                </div>
                            </div>
                            <div className="d-flex">
                                <label htmlFor="email"><img className="cad-img" src="assets/imgs/icons/email.png" alt="icone de email"/></label>
                                <div className="d-flex flex-column">
                                    <p className="m-0 ms-2"><strong>Email</strong><span className="color-red">*</span></p>
                                    <input className="input-cad ps-2 m-2" type="email" name="email" id="email" placeholder="XXXX.@gmail.com"/>
                                </div>
                            </div>
                            <div className="d-flex">
                                <label htmlFor="senha"><img className="cad-img" src="assets/imgs/icons/senha.png" alt="icone de senha"/></label>
                                <div className="d-flex flex-column">
                                    <p className="m-0 ms-2"><strong>Senha</strong><span className="color-red">*</span></p>
                                    <input className="input-cad ps-2 m-2" type="password" name="senha" id="senha" placeholder=""/>
                                </div>
                            </div>
                            <input type="submit" value="Cadastrar" className="btn-cad" onClick={CadUser}/>
                        </form>
                        <a className="trocar-senha text-end" href="#"><p className="text-start">Esqueceu a senha?</p></a>
                    </article>
                </section>
            </main>    
        </div>
    )
}

export default Cadastro