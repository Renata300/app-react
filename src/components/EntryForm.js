import React, { Fragment } from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

function EntryForm({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <Fragment>
      <Form.Group>
        <Form.Input
          minLength={1}
          maxLength={50}
          style={{ margin: 1, marginBottom: 5 }}
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          minLength={1}
          maxLength={9}
          style={{ margin: 1, marginBottom: 5}}
          width={4}
          type="number"
          label="Value"
          placeholder="100,00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
      <Segment
        compact
        textAlign="left"
        style={{ marginLeft: 1 }}
      >
        <Checkbox
          toggle
          label="Is expense"
          style={{ margin: 1 }}
          checked={isExpense}
          onChange={() => setIsExpense((oldState) => !oldState)}
        />
      </Segment>
    </Fragment>
  );
}

export default EntryForm;
