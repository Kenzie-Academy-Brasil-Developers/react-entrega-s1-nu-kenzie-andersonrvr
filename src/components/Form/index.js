import "./style.css";
const Form = ({
  listTransactions,
  setListTransactions,
  setListFitered,
  listFitlered,
}) => {
  const registerTransaction = (event) => {
    event.preventDefault();
    let infos = {};
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].name) {
        const { name, value } = event.target[i];
        infos[name] = value;
      }
    }
    if (infos.type === "saída") {
      infos.value = -infos.value;
    }
    setListTransactions([...listTransactions, infos]);
    setListFitered([...listTransactions, infos]);
  };
  return (
    <div>
      <form onSubmit={registerTransaction}>
        <label htmlFor="inputDescription">Descrição</label>
        <input
          required
          type="text"
          placeholder="Digite aqui sua descrição"
          id="inputDescription"
          name="description"
        />
        <label htmlFor="inputValue">Valor</label>
        <input
          required
          type="number"
          placeholder="1"
          id="inputValue"
          name="value"
        />
        <label htmlFor="type">Tipo de valor</label>
        <select id="type" name="type">
          <option>entrada</option>
          <option>saída</option>
        </select>
        <button>Inserir Valor</button>
      </form>
    </div>
  );
};

export default Form;
