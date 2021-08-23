import "./App.css";
import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EnteryLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";
import NewEnteryForm from "./components/NewEnteryForm";
import { useDispatch, useSelector } from 'react-redux';
import { getAllEntries } from "./actions/entries.actions";

function App() {
  // Hooks
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const {isOpen, id} = useSelector((state) => state.modals);
  const entries = useSelector((state) => state.entries);
  const dispatch = useDispatch();

  // ocorre toda vez que 'isOpen','id' ou 'entries' eh alterado
  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);

  //ocorre toda vez que 'entries' eh alterado
  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;

    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
      //else
      return (totalIncomes += Number(entry.value));
    });

    setTotal(totalIncomes - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);
  }, [entries]); 

  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch])

  return (
    <Container>
      <MainHeader title="My Project" />
      <DisplayBalance title="Your Balance:" value={total} size="small" />

      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal} />
      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEnteryForm />
      <ModalEdit isOpen={isOpen} {...entry}/>
    </Container>
  );
}

export default App;

// TODOs: 
/*
  - ver para adicionar um novo elemento seguindo a ordem dos id ja existentes
  - melhorar o design da pagina em geral 
  - nao aceitar que um novo 'edit entry' seja adicionado sem que todos os campos (description e value, no momento) sejam preenchidos
  - so aceitar numeros (pode ser com virgula), valores validos e positivos (pois ja é feito o calculo de adiçao ou decremento, ou seja, se for colocado o sinal de menos, o calculo vai sair errado)
  - atualizar o db.json quando editar alguma coisa da tela (essa atualizaçao ja esta sendo feita na hora de se adicionar e remover)
  - 
*/
