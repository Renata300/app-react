import React from "react";
import { Button, Grid } from "semantic-ui-react";

function ButtonSaveOrCancel({ addEntry, enableButtonOk, enableButtonCancel, resetValues }) {
  return (
    <Grid style={{ marginTop: 0.5, marginBottom: 0.5, marginLeft: 970 }}>
      <Button.Group style={{ marginTop: 0.5 }} >
        <Button disabled={enableButtonOk} /*color="light gray"*/ onClick={() => resetValues()} >Cancel</Button>
        <Button.Or />
        <Button /*color="blue"*/ primary disabled={enableButtonCancel} onClick={() => addEntry()} > 
        {/* se for colocar uma cor no botao, tem que lembrar de retirar o 'primary' da linha acima */}
          Ok
        </Button>
      </Button.Group>
    </Grid>
  );
}

export default ButtonSaveOrCancel;