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
        <Grid columns={7} textAlign="right">
          <Grid.Row>
            <Grid.Column width={1} textAlign="left" /*color='red'*/>
              {id}
            </Grid.Column>
            <Grid.Column width={2} textAlign="left" /*color='blue'*/>
              {description}
            </Grid.Column>
            <Grid.Column width={2} textAlign="center" /*color='yellow'*/>
              {value}
            </Grid.Column>
            <Grid.Column width={3} textAlign="left" /*color='green'*/>
              Place {/* TODO */}
            </Grid.Column>
            <Grid.Column width={3} textAlign="left" /*color='green'*/>
              User {/* TODO */}
            </Grid.Column>
            <Grid.Column width={2} textAlign="right" /*color='green'*/>
              Date {/* TODO */}
            </Grid.Column>
            <Grid.Column width={3} /*color='purple'*/>
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
