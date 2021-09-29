import React from "react";
import "semantic-ui-css/semantic.css";
import NewTaskForm from "../components/NewTaskForm";
import EditTaskForm from "../components/EditTaskForm";
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
  const [editTaskOpen, setEditTaskOpen] = React.useState(false);
  const [newTask, setNewTask] = React.useState({
    name: "",
    color: "",
  });
  const [editedTask, setEditedTask] = React.useState({
    name: "",
    color: "",
  });
  const [currentInd, setCurrentInd] = React.useState(0);
  const [list, setList] = React.useState([]);

  function openNewTask() {
    setNewTaskOpen(true);
  }
  function closeNewTask() {
    setNewTaskOpen(false);
  }
  function openEditTask() {
    setEditTaskOpen(true);
  }
  function closeEditTask() {
    setEditTaskOpen(false);
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
  function editTask() {
    const newList = list.map((task, i) => {
      if (i !== currentInd) return task;
      return {
        name: editedTask.name,
        color: editedTask.color,
      };
    });
    setList(newList);
    setEditedTask({
      name: "",
      color: "",
    });
  }
  function deleteTask(ind) {
    const newList = [...list];
    const thisInd = ind;
    const filteredArray = newList.filter((value, ind) => {
      return ind != thisInd;
    });
    setList(filteredArray);
  }
  const taskList = list.map((task, index) => {
    return (
      <Task
        name={task.name}
        color={task.color}
        key={`${task.name}-${index}`}
        setCurrentInd={setCurrentInd}
        openEditTask={openEditTask}
        deleteTask={deleteTask}
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
        {editTaskOpen ? (
          <EditTaskForm
            closeEditTask={closeEditTask}
            editedTask={editedTask}
            setEditedTask={setEditedTask}
            editTask={editTask}
            setEditTaskOpen={setEditTaskOpen}
          />
        ) : null}
        <List>{taskList}</List>
      </Container>
    </React.Fragment>
  );
};

export default ListApp;
