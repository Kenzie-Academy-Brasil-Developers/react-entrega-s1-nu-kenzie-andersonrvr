import "./style.css";

const Card = ({
  transaction,
  key,
  setListTransactions,
  listTransactions,
  setListFitered,
}) => {
  const excludeCard = (card) => {
    setListTransactions(
      listTransactions.filter((e) => e.description !== card.description)
    );

    setListFitered(
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
        <span>R${transaction.value}</span>
        <button onClick={() => excludeCard(transaction)}>x</button>
      </div>
    </li>
  ) : (
    <li className="saida">
      <div className="salaryEntry">
        <span>{transaction.description}</span>
        <p>Saída</p>
      </div>
      <div className="valueButton">
        <span>R${transaction.value}.00</span>
        <button onClick={() => excludeCard(transaction)}>x</button>
      </div>
    </li>
  );
};

export default Card;
