import React from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { closeEditModal } from "../actions/modals.actions";
import useEntryDetails from "../hooks/useEntryDetails";
import EntryForm from "./EntryForm";

function ModalEdit({ isOpen, description, value, /*date,*/ isExpense, id }) {
  const dispatch = useDispatch();
  const entryUpdate = useEntryDetails(description, value, /*date,*/ isExpense, id); 

  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      {/* <Segment  > */}
      <Modal.Content >
        <EntryForm 
          description={entryUpdate.description}
          value={entryUpdate.value}
          /*date={entryUpdate.date}*/
          isExpense={entryUpdate.isExpense}
          //id={entryUpdate.id}
          setDescription={entryUpdate.setDescription}
          setValue={entryUpdate.setValue}
          /*setDate={entryUpdate.setDate}*/
          setIsExpense={entryUpdate.setIsExpense} 
          //setId={entryUpdate.setId}
        />
      </Modal.Content>
      {/* </Segment> */}
      <Modal.Actions>
          <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
          <Button onClick={() => entryUpdate.updateEntry(id)} primary>Ok</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
