// Aqui voce chama todas as linhas de uma certa lista

import React from "react";
import { Container } from "semantic-ui-react";
import EnteryLine from "./EnteryLine";

function EntryLines({ entries, deleteEntry }) {
  return (
    <Container>
      {entries.map((entry) => (
        <EnteryLine
          key={entry.id}
          {...entry}
          deleteEntry={deleteEntry}
        />
      ))}
    </Container>
  );
}

export default EntryLines;
