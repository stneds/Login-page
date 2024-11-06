"use client"
import Logo from "@/app/Logo.png";
import Image from "next/image";


function Pages() {
  return (
    <div className=" container">
      <header className="header">
        <Image src={Logo} alt="Workflow" />
        <span> Faça login aqui</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            className="m-3 text-black"
            type="text"
            name="email"
            id="email"
            placeholder="exemplo@gmail.com"
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            className="m-3 text-black"
            type="password"
            name="password"
            id="password"
            placeholder="******"
          />
        </div>

        <a href=""> Esqueceu a senha?</a>
        <button className="button">
          Conectar-se 
        </button>

        <div className="footer">
          <p>
            Ainda não criou sua conta?{" "}
            <a href="">
              <span className="text-blue-500">Crie aqui</span>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Pages;


