import { Link } from "react-router-dom"
import { useEffect } from "react";

type LoginProps = {
    setUsername: React.Dispatch<React.SetStateAction<string>>;
}

function Login( { setUsername } : LoginProps ) {

    useEffect(() => {
        const inputLogin = document.querySelectorAll('.input-login')
        inputLogin.forEach(input => {
            input.addEventListener('keyup', (event) => {
                const target = event.target as HTMLInputElement
                if (target.value.length < 3) {
                    target.style.outlineColor = '#ff6b6b'
                } else {
                    target.style.outlineColor = '#28a745'
                }
            })
        });
    }, []);

    const salvarNome = async (e:any) => {
        e.preventDefault();

        const Email = (document.querySelector('#email') as HTMLInputElement).value;

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/Users/?email=${Email}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application.json"
                    }
                }
            );

            const data = await response.json();
            if (!response.ok) {
                alert("Usuario ou senha incorreta")
            }
            setUsername(data.firstName);
        } catch (error) {
            console.error("Erro ao buscar usuario: ", error)
        }
    }

    return (
        <div className="body-login p-0 m-0">
            <main className="d-flex justify-content-center align-items-center w-100 h-100">
                <section className="box-login d-flex flex-column align-items-center">
                    <div className="d-flex justify-content-start w-100">
                        <Link to="/">
                            <div className="back-button m-2 mb-0 text-decoration-none">
                                <img src="assets/imgs/icons/seta-esquerda.png" alt=""/><p className="text-white d-inline m-1">Voltar</p>
                            </div>
                        </Link>
                    </div>
                    <figure className="mt-5"><img src="assets/imgs/icons/logo-loja.png" alt=""/></figure>
                    <article>
                        <form action="#" className="d-flex flex-column align-items-center mt-3">
                            <div>
                                <label htmlFor="email"><img className="log-img" src="assets/imgs/icons/email.png" alt="icone de login"/></label>
                                <input className="input-login ps-2 m-2" type="text" name="email" id="email" placeholder="Email"/>
                            </div>
                            <div>
                                <label htmlFor="senha"><img src="assets/imgs/icons/senha.png" alt="icone de senha"/></label>
                                <input className="input-login ps-2 m-2" type="password" name="senha" id="senha" placeholder="Senha"/>
                            </div>
                            <input type="submit" value="Entrar" className="btn-entrar" onClick={salvarNome}/>
                        </form>
                        <a className="trocar-senha text-end" href="#"><p>Esqueceu a senha?</p></a>
                    </article>
                    <article>
                        <div className="box-ou-others d-flex">
                            <hr className="hr-login"/>
                            <p>Ou entre com</p>
                            <hr className="hr-login"/>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <a href="#" className="box-other-login m-2 d-flex align-items-center">
                                <button className="btn-other-login m-2" id="btn-other-login1"><img className="img-other-login" src="assets/imgs/icons/google.png" alt="iconedo google"/></button>
                                <p className="text-other-login">Entrar com Google</p>
                            </a>
                            <a href="#" className="box-other-login m-2 d-flex align-items-center">
                                <button className="btn-other-login m-2" id="btn-other-login2"><img className="img-other-login" src="assets/imgs/icons/facebook.png" alt="iconedo google"/></button>
                                <p className="text-other-login">Entrar com Facebook</p>
                            </a>
                        </div>
                    </article>
                    <article>
                
                    </article>
                </section>
            </main>    
        </div>
    )
}

export default Login