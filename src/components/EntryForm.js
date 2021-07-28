import React, { Fragment } from "react";
import { Button, Checkbox, Form, Modal, Segment } from "semantic-ui-react";
import NewEnteryForm from "./NewEnteryForm";

function EntryForm({description, value, isExpense, setDescription, setValue, setIsExpense}) {
  return (
    <Fragment>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100,00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></Form.Input>
      </Form.Group>
      <Segment>
        <Checkbox
          toggle
          label="Is expense"
          checked={isExpense}
          onChange={() => setIsExpense((oldState) => !oldState)}
        />
      </Segment>
    </Fragment>
  );
}

export default EntryForm;
