import React from "react";
import { Button, Grid } from "semantic-ui-react";

function ButtonSaveOrCancel({ addEntry }) {
  return (
    <Grid style={{ marginTop: 0.5, marginBottom: 0.5, marginLeft:-12 }}>
      <Button.Group style={{ marginTop: 0.5 }} >
        <Button /*color="light gray"*/  >Cancel</Button>
        <Button.Or />
        <Button /*color="blue"*/ primary onClick={() => addEntry()} > 
        {/* se for colocar uma cor no botao, tem que lembrar de retirar o 'primary' da linha acima */}
          Ok
        </Button>
      </Button.Group>
    </Grid>
  );
}

export default ButtonSaveOrCancel;


// TODO: liberar o botao 'OK' apenas quando todos os campos estiverem preenchidos