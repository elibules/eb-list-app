import React from "react";
import {
  Form,
  Header,
  Button,
  Segment,
  Select,
  Input,
} from "semantic-ui-react";

const NewTaskForm = (props) => {
  function changeNewTask(e, { value, name }) {
    const newTaskClone = { ...props.newTask };
    newTaskClone[name] = value;
    props.setNewTask(newTaskClone);
  }
  return (
    <React.Fragment>
      <Segment>
        <Header as="h2">New Task:</Header>
        <Form>
          <Form.Field
            control={Input}
            label="Task Name"
            placeholder="Enter Task Name..."
            value={props.newTask.name}
            onChange={changeNewTask}
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
            value={props.newTask.color}
            onChange={changeNewTask}
            name="color"
          />
          <Button.Group fluid>
            <Button color="red" onClick={props.closeNewTask}>
              Cancel
            </Button>
            <Button.Or />
            <Button color="green" onClick={props.addNewTask}>
              Add Task
            </Button>
          </Button.Group>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default NewTaskForm;
