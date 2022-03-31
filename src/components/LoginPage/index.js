import "./style.css";
const LoginPage = ({ callback }) => {
  return (
    <div className="loginBody">
      <div className="loginPrincipal">
        <div className="infosNu">
          <h1>
            Nu <span>Kenzie</span>
          </h1>
          <h2>Centralize o controle das suas finanças</h2>
          <p>de forma rápida e segura</p>
          <button onClick={() => callback()}>Iniciar</button>
        </div>
        <img src="https://media.discordapp.net/attachments/591663890991939604/959112859185471538/unknown.png?width=469&height=443" />
      </div>
    </div>
  );
};

export default LoginPage;
