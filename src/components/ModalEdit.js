import React from "react";
import { Button, Modal } from "semantic-ui-react";
import NewEnteryForm from "./NewEnteryForm";

function ModalEdit({ isOpen, setIsOpen }) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <NewEnteryForm/>
      </Modal.Content>
      <Modal.Actions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
