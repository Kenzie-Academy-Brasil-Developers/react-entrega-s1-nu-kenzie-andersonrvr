import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  return listTransactions.length !== 0 ? (
    <div className="totalValue">
      Valor total :{" "}
      <span>
        {listTransactions.reduce((acc, value) => acc + Number(value.value), 0)}
      </span>
      <p>Valor referente a todas transações</p>
    </div>
  ) : (
    <></>
  );
};

export default TotalMoney;
