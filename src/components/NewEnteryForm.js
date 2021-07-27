import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEnteryForm(addEntery) {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  return (
    <Form unstackable>
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
      <ButtonSaveOrCancel addEntery={addEntery} description={description} value={value}/>
    </Form>
  );
}

export default NewEnteryForm;
