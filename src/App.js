import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EnteryLine from './components/EnteryLine';
import MainHeader from './components/MainHeader';
import NewEnteryForm from './components/NewEnteryForm';

function App() {
  return (
    <Container>
      <MainHeader title='My Project'/>
      <DisplayBalance title='Your Balance:'value='2000' size='small'/>

      <DisplayBalances/>
      <MainHeader title='History' type='h3'/>
      
      <EnteryLine description='Income' value='$10.00'/>
      <EnteryLine description='Expense' value='$100.00' isExpense/>
      
      <MainHeader title='Add new transaction' type='h3'/> 
      <NewEnteryForm />
    </Container>
  );
}

export default App;
