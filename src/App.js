import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EnteryLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";
import NewEnteryForm from "./components/NewEnteryForm";

function App() {
  const [entries, setEntries] = useState(inicialEnteries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];

      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      //resetEntry();
    }
  });

  //const deleteEntry = (id) => {}  ---> outra forma de fazer
  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  function editEntry(id) {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];

      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
    //resetEntry();
  }

  // function resetEntry() {
  //   setDescription('');
  //   setValue('');
  //   setIsExpense(true);
  // }

  return (
    <Container>
      <MainHeader title="My Project" />
      <DisplayBalance title="Your Balance:" value="2000" size="small" />

      <DisplayBalances />
      <MainHeader title="History" type="h3" />

      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEnteryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

var inicialEnteries = [
  // ctrl + d --> vai selecionando todos os elementos iguais a ele
  {
    id: 1,
    description: "Work income",
    value: "$1000,00",
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: "$20,00",
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: "$300,00",
    isExpense: true,
  },
  {
    id: 4,
    description: "Power bill",
    value: "$50,00",
    isExpense: true,
  },
];
