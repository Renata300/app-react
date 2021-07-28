import { useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EnteryLine from "./components/EnteryLine";
import EntryLines from "./components/EnteryLines";
import MainHeader from "./components/MainHeader";
import NewEnteryForm from "./components/NewEnteryForm";

function App() {
  const [entries, setEntries] = useState(inicialEnteries);

  //const deleteEntry = (id) => {}  ---> outra forma de fazer
  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length+1,
      description,
      value,
      isExpense
    });
    setEntries(result);
  }

  return (
    <Container>
      <MainHeader title="My Project" />
      <DisplayBalance title="Your Balance:" value="2000" size="small" />

      <DisplayBalances />
      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} deleteEntry={deleteEntry}/>

      <MainHeader title="Add new transaction" type="h3" />
      <NewEnteryForm addEntry={addEntry} />
    </Container>
  );
}

export default App;

var inicialEnteries = [
  // ctrl + d --> vai selecionando todos os elementos iguais a ele
  { 
    id:1,
    description:'Work income',
    value:'$1000,00',
    isExpense:false
  },
  {
    id:2,
    description:'Water bill',
    value:'$20,00',
    isExpense:true
  },
  {
    id:3,
    description:'Rent',
    value:'$300,00',
    isExpense:true
  },
  {
    id:4,
    description:'Power bill',
    value:'$50,00',
    isExpense:true
  }
]
