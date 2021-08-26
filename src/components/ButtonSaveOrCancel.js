import React from "react";
import { Button, Grid } from "semantic-ui-react";

const enableDisable = async () => {
  return false;
}

function ButtonSaveOrCancel({ addEntry }) {
  return (
    <Grid style={{ marginTop: 0.5, marginBottom: 0.5, marginLeft:-7 }}>
      <Button.Group style={{ marginTop: 0.5 }} >
        <Button /*color="light gray"*/  >Cancel</Button>
        <Button.Or />
        <Button /*color="blue"*/ primary onClick={() => addEntry()} >
          Ok
        </Button>
      </Button.Group>
    </Grid>
  );
}

export default ButtonSaveOrCancel;
