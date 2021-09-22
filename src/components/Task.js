import React from "react";
import { List, Label, Grid, Button } from "semantic-ui-react";
const Task = ({ name, color, editTask, index }) => {
  function editCurrentTask() {
    editTask(index);
  }
  return (
    <List.Item>
      <Grid>
        <Grid.Column width="8">
          <Label color={color} size="big">
            {name}
          </Label>
        </Grid.Column>
        <Grid.Column width="8" textAlign="right">
          <Button icon="trash" color="red"></Button>
          <Button
            icon="pencil"
            color="orange"
            onClick={editCurrentTask}
          ></Button>
        </Grid.Column>
      </Grid>
    </List.Item>
  );
};
export default Task;
