// https://react.semantic-ui.com/addons/pagination/

import "./App.css";
import { useEffect, useState } from "react";
import { Container, Grid, Icon, Segment } from "semantic-ui-react";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EnteryLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";
import NewEnteryForm from "./components/NewEnteryForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllEntries } from "./actions/entries.actions";

function App() {
  // Hooks
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const { isOpen, id } = useSelector((state) => state.modals);
  const entries = useSelector((state) => state.entries);
  const dispatch = useDispatch();

  // ocorre toda vez que 'isOpen','id' ou 'entries' eh alterado
  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
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
  }, [dispatch]);

  return (
    // <>
    // <Table definition>
    // <TableBody>
    <Grid
      container
      style={{ paddingTop: "30px", paddingBottom: "30px", margin: "3px" }}
      centered
      row
      item
      xs={12}
    >
      <Segment width={3} style={{ padding: "15px" }}>
        <Segment style={{ margin: "3px", paddingRight: "50px", paddingLeft: "50px"}} >
          {/* <Container > */}
          <Container >
            <MainHeader title="My Expenses" />
            {/* colocal um simbolo no canto direito */}
            <DisplayBalance
              title="Your Balance:"
              value={total}
              size="small"
              color={total > 0 ? "green" : "orange"}
            />
          </Container>

          <DisplayBalances
            expenseTotal={expenseTotal}
            incomeTotal={incomeTotal}
          />

          {/* <Grid style={{ marginTop: 20, marginBottom: 10 }}> */}
          {/* Se quiser colocar esse 'MainHeader' no canto, eh so descomentar o 'Grid' */}
          <MainHeader title="History" type="h3" />
          {/* </Grid> */}
          <EntryLines entries={entries} />

          {/* <Grid style={{ marginTop: 20, marginBottom: 10 }}> */}
          {/* Se quiser colocar esse 'MainHeader' no canto, eh so descomentar o 'Grid' */}
          <MainHeader title="Add new transaction" type="h3" />
          {/* </Grid> */}

          <NewEnteryForm />
          <ModalEdit isOpen={isOpen} {...entry} />
          {/* </Container> */}
        </Segment>
      </Segment>
    </Grid>
    // </TableBody>
    // </Table>
    // </>
  );
}

export default App;

// TODOs:
/*
  - ver para adicionar um novo elemento seguindo a ordem dos id ja existentes
  - melhorar o design da pagina em geral 
  - nao aceitar que um novo 'edit entry' seja adicionado sem que todos os campos (description e value, no momento) sejam preenchidos
  - so aceitar numeros (pode ser com virgula), valores validos e positivos (pois ja é feito o calculo de adiçao ou decremento, ou seja, se for colocado o sinal de menos, o calculo vai sair errado)
  - colocar spinner, warnings...
*/
