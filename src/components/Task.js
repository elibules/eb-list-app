import React from "react";
import { List, Label, Grid, Button, Radio, Popup } from "semantic-ui-react";
const Task = ({
  name,
  color,
  openEditTask,
  index,
  deleteTask,
  setCurrentInd,
}) => {
  const [backgroundColor, setBackgroundColor] = React.useState("grey");
  const [edited, setEdited] = React.useState("");
  function editCurrentTask() {
    openEditTask();
    setEdited("This is Edited");
    setCurrentInd(index);
  }
  function deleteCurrentTask() {
    deleteTask(index, name);
  }
  function givePriority() {
    if (backgroundColor == "grey") {
      setBackgroundColor("black");
    } else setBackgroundColor("grey");
    console.log(backgroundColor);
  }
  return (
    <List.Item>
      <Label color={backgroundColor}>
        <Grid>
          <Grid.Column width="6">
            <Label color={color} size="big">
              {name}
            </Label>
          </Grid.Column>
          <Grid.Column width="3" textAlign="left">
            <Label size="small">Priority:</Label>
            <Radio toggle onClick={givePriority} />
          </Grid.Column>
          <Grid.Column width="7" textAlign="right">
            <Button
              icon="trash"
              color="red"
              onClick={deleteCurrentTask}
            ></Button>
            <Popup
              content="Edit your task"
              trigger={
                <Button
                  icon="pencil"
                  color="orange"
                  onClick={editCurrentTask}
                ></Button>
              }
            />
          </Grid.Column>
        </Grid>
        <Grid.Row>{edited}</Grid.Row>
      </Label>
    </List.Item>
  );
};
export default Task;
