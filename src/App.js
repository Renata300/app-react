import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import ButtonSaveOrCancel from './components/ButtonSaveOrCancel';
import DisplayBalance from './components/DisplayBalance';
import MainHeader from './components/MainHeader';
import NewEnteryForm from './components/NewEnteryForm';

function App() {
  return (
    <Container>
      <MainHeader title='My Project'/>
      <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2000</Statistic.Value>
      </Statistic>
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title='Income' value='1050.50' color='green'/>
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance title='Expenses' value='620.45' color='red'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <MainHeader title='History' type='h3'/>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$100,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/> 
              <Icon name='trash'bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='green'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Anything</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$10,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/> 
              <Icon name='trash'bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='blue'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Everything</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$1000,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/> 
              <Icon name='trash'bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <MainHeader title='Add new transaction' type='h3'/> 
      <NewEnteryForm />
    </Container>
  );
}

export default App;
