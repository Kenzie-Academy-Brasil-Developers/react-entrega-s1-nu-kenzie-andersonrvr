import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  return listTransactions.length !== 0 ? (
    <div className="totalValue">
      Valor total :{" "}
      <span>
        R$
        {listTransactions
          .reduce((acc, value) => acc + Number(value.value), 0)
          .toFixed(2)}
      </span>
      <p>Valor referente a todas transações</p>
    </div>
  ) : (
    <></>
  );
};

export default TotalMoney;
