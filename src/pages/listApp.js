import React from "react";
import "semantic-ui-css/semantic.css";
import {
  Container,
  Dropdown,
  Form,
  Header,
  Input,
  List,
  Button,
} from "semantic-ui-react";

const ListApp = () => {
  const initialNewTask = {
    color: "",
    name: "",
  };

  const [newTask, setNewTask] = React.useState(initialNewTask);
  const { name, color } = newTask;
  const [list, setList] = React.useState([]);

  function addTask() {
    setList([...list, newTask]);
    setNewTask(initialNewTask);
  }

  function changeNewTask(e, { name, value }) {
    setNewTask({ ...newTask, [name]: value });
    console.log(newTask);
  }

  const colorOptions = [
    { text: "Blue", value: "blue" },
    { text: "Red", value: "red" },
    { text: "Yellow", value: "Yellow" },
  ];
  return (
    <React.Fragment>
      <Container>
        <Header as="h1">List App</Header>
        <Form>
          <Form.Field
            control={Input}
            label="Task Name"
            name="name"
            value={name}
            onChange={changeNewTask}
          />
          <Form.Field
            control={Dropdown}
            placeholder="Select Task Color"
            name="color"
            clearable
            selection
            selectOnBlur={false}
            fluid
            value={color}
            options={colorOptions}
          />
          <Button onSubmit={addTask}>Submit</Button>
        </Form>
        <List>
          <List.Item color={newTask.color}>{newTask.name}</List.Item>
        </List>
      </Container>
    </React.Fragment>
  );
};

export default ListApp;
