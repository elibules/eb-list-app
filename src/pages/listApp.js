import React from "react";
import "semantic-ui-css/semantic.css";
import NewTaskForm from "../components/NewTaskForm";
import Task from "../components/Task";
import { Container, Header, Button, Grid, List } from "semantic-ui-react";

const containerStyles = {
  margin: "20px",
  maxWidth: "400px",
};

const buttonStyles = {
  display: "flex",
  justifyContent: "center",
};
const ListApp = () => {
  const [newTaskOpen, setNewTaskOpen] = React.useState(false);
  const [newTask, setNewTask] = React.useState({
    name: "",
    color: "",
  });
  const [list, setList] = React.useState([]);

  function openNewTask() {
    setNewTaskOpen(true);
  }
  function closeNewTask() {
    setNewTaskOpen(false);
  }
  function addNewTask() {
    const listClone = [...list];
    listClone.push(newTask);
    setList(listClone);
    setNewTask({
      name: "",
      color: "",
    });
    closeNewTask();
  }
  function editTask(ind) {
    const newList = list.map((task, i) => {
      if (i !== ind) return task;
      return {
        name: `Edit ${task.name}`,
        color: task.color,
      };
    });
    setList(newList);
  }
  function deleteTask() {
    // Array.filter
  }
  const taskList = list.map((task, index) => {
    return (
      <Task
        name={task.name}
        color={task.color}
        key={`${task.name}-${index}`}
        editTask={editTask}
        index={index}
      />
    );
  });

  return (
    <React.Fragment>
      <Container style={containerStyles}>
        <Grid columns="3">
          <Grid.Column width="4" style={buttonStyles}>
            <Button icon="bars"></Button>
          </Grid.Column>
          <Grid.Column width="8">
            <Header textAlign="center" as="h1">
              Todo List
            </Header>
          </Grid.Column>
          <Grid.Column width="4" style={buttonStyles}>
            <Button
              icon="plus"
              color="green"
              textalign="right"
              onClick={openNewTask}
            ></Button>
          </Grid.Column>
        </Grid>
        {newTaskOpen ? (
          <NewTaskForm
            closeNewTask={closeNewTask}
            addNewTask={addNewTask}
            newTask={newTask}
            setNewTask={setNewTask}
          />
        ) : null}
        <List>{taskList}</List>
      </Container>
    </React.Fragment>
  );
};

export default ListApp;
