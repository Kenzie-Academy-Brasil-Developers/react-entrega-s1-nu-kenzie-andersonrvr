import "./style.css";
const Form = ({ listTransactions, setListTransactions }) => {
  const registerTransaction = (event) => {
    event.preventDefault();
    console.log(event.target);
    let infos = {};
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].name) {
        const { name, value } = event.target[i];
        infos[name] = value;
      }
    }
    if (infos.type === "Saída") {
      infos.value = -infos.value;
    }
    setListTransactions([...listTransactions, infos]);
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
          <option>Entrada</option>
          <option>Saída</option>
        </select>
        <button>Inserir Valor</button>
      </form>
    </div>
  );
};

export default Form;
