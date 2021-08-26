import React, { Fragment } from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

function EntryForm({
  description,
  value,
  /*date,*/
  isExpense,
  setDescription,
  setValue,
  /*setDate,*/
  setIsExpense,
}) {
  return (
    <Fragment>
      <Form.Group>
        <Form.Input
          minLength={1}
          maxLength={50}
          style={{ margin: 5 }}
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
          style={{ margin: 5 }}
          width={4}
          label="Value"
          placeholder="100,00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Form.Input
          minLength={10}
          maxLength={10}
          style={{ margin: 5 }}
          label="Date"
          placeholder="25/08/2021"
          icon="calendar alternate outline"
          iconPosition="right"
          /*value="Date"*/
        />{" "}
        {/* TODO*/}
      </Form.Group>
      <Segment textAlign="left" style={{ marginLeft: 5, marginRight: -5 }}>
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
