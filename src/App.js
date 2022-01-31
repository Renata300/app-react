// https://react.semantic-ui.com/addons/pagination/

import "./App.css";
import { useEffect, useState } from "react";
import { Container, Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EnteryLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";
import NewEnteryForm from "./components/NewEnteryForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllEntries } from "./actions/entries.actions";
// import {Color} from '@material-ui/lab/Alert';

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
    <Grid
      container
      style={{ paddingTop: "30px", paddingBottom: "30px", margin: "3px" }}
      centered
      row
      item
      xs={12}
    >
      <Segment tertiary width={3} style={{ padding: "5px" }}  >
        <Segment style={{ margin: "3px", paddingRight: "50px", paddingLeft: "50px" }} >
          <Container style={{ marginTop: 10}} >
            <MainHeader title="My Expenses" style={{ margin: "3px"}}/>
            
            {/* colocal um simbolo no canto direito */}
            <DisplayBalance
              title="Your Balance:"
              value={total}
              size="small"
              color={total > 0 ? "blue" : "orange"}
            />
          </Container>

          <DisplayBalances
            expenseTotal={expenseTotal}
            incomeTotal={incomeTotal}
          />

          {/* <Grid style={{ marginTop: '20px', marginBottom: '10px'  }}> */}
          {/* Se quiser colocar esse 'MainHeader' no canto, eh so descomentar o 'Grid' */}
            <MainHeader title="History" type="h3" />
          {/* </Grid> */}
          <EntryLines entries={entries} />

          {/* <Grid style={{ marginTop: 20, marginBottom: 10}}> */}
          {/* Se quiser colocar esse 'MainHeader' no canto, eh so descomentar o 'Grid' */}
            <MainHeader title="Add new transaction" type="h3" />
          {/* </Grid> */}

          <NewEnteryForm />
          <ModalEdit isOpen={isOpen} {...entry} />
        </Segment>
      </Segment>
    </Grid>
  );
}

export default App;

// TODOs:
/*
  - melhorar o design da pagina em geral 
  - so aceitar numeros (pode ser com virgula), valores validos e positivos (pois ja é feito o calculo de adiçao ou decremento, ou seja, se for colocado o sinal de menos, o calculo vai sair errado)
  - colocar spinner, warnings...
  - poder ordenar a lista por data, valor...
*/
