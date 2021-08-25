import React from "react";
import { Button, Grid, Segment } from "semantic-ui-react";

function ButtonSaveOrCancel({ addEntry }) {
  return (
    <Grid style={{ marginTop: 0.5, marginBottom: 0.5 }}>
      <Button.Group style={{ marginTop: 0.5 }}>
        <Button>Cancel</Button>
        <Button.Or />
        <Button primary onClick={() => addEntry()}>
          Ok
        </Button>
      </Button.Group>
    </Grid>
  );
}

export default ButtonSaveOrCancel;
