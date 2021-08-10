import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EnteryLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";
import NewEnteryForm from "./components/NewEnteryForm";
import { useDispatch, useSelector } from 'react-redux';
import { getAllEntries } from "./actions/entries.actions";
import axios from "axios";

function App() {
  // Hooks
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const {isOpen, id} = useSelector((state) => state.modals);
  const entries = useSelector((state) => state.entries);

  // ocorre toda vez que 'isOpen' eh alterado
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
  }, [entries]); // ocorre apenas se houver alteracao no 'entries'

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEntries());
  }, [])

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


