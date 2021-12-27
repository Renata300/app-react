import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import useEntryDetails from "../hooks/useEntryDetails";

function NewEnteryForm() {
  const {description, setDescription, value, setValue, isExpense, setIsExpense, /*id, setId, date, setDate,*/ addEntry } = useEntryDetails();

  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        /*date={date}*/
        isExpense={isExpense}
        // id={id}
        setDescription={setDescription}
        setValue={setValue}
        /*setDate={setDate}*/
        setIsExpense={setIsExpense}
        // setId={setId}
      />
      <ButtonSaveOrCancel
        addEntry={addEntry}
      />
    </Form>
  );
}

export default NewEnteryForm;
