import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import useEntryDetails from "../hooks/useEntryDetails";

function NewEnteryForm() {
  const {description, setDescription, value, setValue, isExpense, setIsExpense, /*id, setId*/ addEntry, resetValues } = useEntryDetails();

  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ButtonSaveOrCancel
        addEntry={addEntry}
        resetValues={resetValues}
        enableButtonOk={description || value ? false : true}
        enableButtonCancel={description && value ? false : true}
      />
    </Form>
  );
}

export default NewEnteryForm;
