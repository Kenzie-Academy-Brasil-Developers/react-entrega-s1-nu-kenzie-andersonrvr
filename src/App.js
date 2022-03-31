import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import LoginPage from "./components/LoginPage";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Login = () => setIsLoggedIn(true);
  const Logout = () => setIsLoggedIn(false);

  return isLoggedIn ? (
    <div className="App">
      <header>
        <h1>
          Nu <span className="titleBlack">Kenzie</span>
        </h1>
        <button className="logoutButton" onClick={() => Logout()}>
          Inicio
        </button>
      </header>
      <main>
        <section className="sectionForm">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </section>
        <section className="sectionList">
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </section>
      </main>
    </div>
  ) : (
    <div>
      <LoginPage callback={Login} />
    </div>
  );
}

export default App;
