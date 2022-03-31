import Card from "../Card";

const List = ({ listTransactions, setListTransactions }) => {
  return listTransactions.length === 0 ? (
    <div>
      <h2>Você ainda não possui nenhum lançamento</h2>
      <div>Carregando</div>
      <div>Carregando</div>
      <div>Carregando</div>
    </div>
  ) : (
    <ul>
      {listTransactions.map((transaction, index) => (
        <Card
          transaction={transaction}
          key={index}
          setListTransactions={setListTransactions}
          listTransactions={listTransactions}
        />
      ))}
    </ul>
  );
};

export default List;
