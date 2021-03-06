import Card from "../Card";
import "./style.css";

const List = ({
  listTransactions,
  setListTransactions,
  listFiltered,
  setListFitered,
}) => {
  return listFiltered.length === 0 ? (
    <div>
      <div className="titleList">
        <span>Resumo financeiro</span>
        <div className="filters">
          <button
            className="btnFilter"
            onClick={() => setListFitered(listTransactions)}
          >
            Todos
          </button>
          <button
            className="btnFilter"
            onClick={() =>
              setListFitered(
                listTransactions.filter((e) => e.type === "entrada")
              )
            }
          >
            Entradas
          </button>
          <button
            className="btnFilter"
            onClick={() =>
              setListFitered(listTransactions.filter((e) => e.type === "saída"))
            }
          >
            Despesas
          </button>
        </div>
      </div>
      <h3>Você ainda não possui nenhum lançamento</h3>
      <ul className="emptyUL">
        <li>
          <div></div>
          <section></section>
        </li>
        <li>
          <div></div>
          <section></section>
        </li>
        <li>
          <div></div>
          <section></section>
        </li>
      </ul>
    </div>
  ) : (
    <>
      <div className="titleList">
        <span>Resumo financeiro</span>
        <div className="filters">
          <button
            className="btnFilter"
            onClick={() => {
              setListFitered(listTransactions);
            }}
          >
            Todos
          </button>
          <button
            className="btnFilter"
            onClick={() => {
              setListFitered(
                listTransactions.filter((e) => e.type === "entrada")
              );
            }}
          >
            Entradas
          </button>
          <button
            className="btnFilter"
            onClick={() => {
              setListFitered(
                listTransactions.filter((e) => e.type === "saída")
              );
            }}
          >
            Despesas
          </button>
        </div>
      </div>
      <ul>
        {listFiltered.map((transaction, index) => (
          <Card
            transaction={transaction}
            key={index}
            setListTransactions={setListTransactions}
            listTransactions={listTransactions}
            listFiltered={listFiltered}
            setListFitered={setListFitered}
          />
        ))}
      </ul>
    </>
  );
};

export default List;

// return listFiltered.length === 0 ? (
//   <div>
//     <div className="titleList">
//       <span>Resumo financeiro</span>
//       <div className="filters">
//         <button className="btnFilter">Todos</button>
//         <button className="btnFilter">Entradas</button>
//         <button className="btnFilter">Despesas</button>
//       </div>
//     </div>
//     <h3>Você ainda não possui nenhum lançamento</h3>
//     <ul className="emptyUL">
//       <li>
//         <div></div>
//         <section></section>
//       </li>
//       <li>
//         <div></div>
//         <section></section>
//       </li>
//       <li>
//         <div></div>
//         <section></section>
//       </li>
//     </ul>
//   </div>
// ) : (
//   <>
//     <div className="titleList">
//       <span>Resumo financeiro</span>
//       <div className="filters">
//         <button
//           className="btnFilter"
//           onClick={() => setListFitered(listTransactions)}
//         >
//           Todos
//         </button>
//         <button
//           className="btnFilter"
//           onClick={() =>
//             setListFitered(
//               listTransactions.filter((e) => e.type === "entrada")
//             )
//           }
//         >
//           Entradas
//         </button>
//         <button
//           className="btnFilter"
//           onClick={() =>
//             setListFitered(listTransactions.filter((e) => e.type === "saída"))
//           }
//         >
//           Despesas
//         </button>
//       </div>
//     </div>
//     <ul>
//       {listFiltered.map((transaction, index) => (
//         <Card
//           transaction={transaction}
//           key={index}
//           setListTransactions={setListTransactions}
//           listTransactions={listTransactions}
//           listFiltered={listFiltered}
//           setListFitered={setListFitered}
//         />
//       ))}
//     </ul>
//   </>
// );
