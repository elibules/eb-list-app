import React from "react";
import {
  Form,
  Header,
  Button,
  Segment,
  Select,
  Input,
} from "semantic-ui-react";

const EditTaskForm = (props) => {
  function editNewTask(e, { value, name }) {
    const newTaskClone = { ...props.editedTask };
    newTaskClone[name] = value;
    props.setEditedTask(newTaskClone);
  }
  function closeEdit() {
    props.closeEditTask();
    props.editTask();
  }
  return (
    <React.Fragment>
      <Segment>
        <Header as="h2">Edit Task:</Header>
        <Form>
          <Form.Field
            control={Input}
            label="Task Name"
            placeholder="Edit Task Name..."
            value={props.editedTask.name}
            onChange={editNewTask}
            name="name"
          />
          <Form.Field
            control={Select}
            label="Task Control"
            placeholder="Choose Task Color"
            options={[
              { text: "red", value: "red" },
              { text: "blue", value: "blue" },
              { text: "yellow", value: "yellow" },
            ]}
            value={props.editedTask.color}
            onChange={editNewTask}
            name="color"
          />
          <Button.Group fluid>
            <Button onClick={closeEdit} color="green">
              Done
            </Button>
          </Button.Group>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default EditTaskForm;
