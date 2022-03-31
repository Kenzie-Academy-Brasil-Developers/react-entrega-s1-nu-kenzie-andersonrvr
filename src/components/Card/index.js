import "./style.css";

const Card = ({ transaction, key, setListTransactions, listTransactions }) => {
  const excludeCard = (card) => {
    setListTransactions(
      listTransactions.filter((e) => e.description !== card.description)
    );
  };

  return transaction.type === "entrada" ? (
    <li className="entrada" key={key}>
      <div className="salaryEntry">
        <span>{transaction.description}</span>
        <p>Entrada</p>
      </div>
      <div className="valueButton">
        <span>{transaction.value}</span>
        <button onClick={() => excludeCard(transaction)}>X</button>
      </div>
    </li>
  ) : (
    <li className="saida">
      <div className="salaryEntry">
        <span>{transaction.description}</span>
        <p>Entrada</p>
      </div>
      <div className="valueButton">
        <span>{transaction.value}</span>
        <button onClick={() => excludeCard(transaction)}>X</button>
      </div>
    </li>
  );
};

export default Card;
