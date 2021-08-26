import React, { Fragment } from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { removeEntryRedux } from "../actions/entries.actions";
import { openEditModal } from "../actions/modals.actions";

function EnteryLine({ id, description, value, date, isExpense = false }) {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={5} textAlign="right">
          <Grid.Row>
          <Grid.Column width={3} textAlign="left" >
            {id} {/* TODO */}
          </Grid.Column>
            <Grid.Column width={3} textAlign="left" >
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {value}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              Date {/* TODO */}
              {/* {date} */}
            </Grid.Column>
            <Grid.Column width={4}>
              <Icon
                name="edit"
                bordered
                onClick={() => dispatch(openEditModal(id))}
              />
              <Icon
                name="trash"
                bordered
                onClick={() => dispatch(removeEntryRedux(id))}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  );
}

export default EnteryLine;
