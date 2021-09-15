import React from "react";
import "semantic-ui-css/semantic.css";
import Task from "../components/Task";
import {
  Container,
  Dropdown,
  Form,
  Header,
  Input,
  List,
  Button,
  Grid,
  Segment,
  Select,
  ButtonGroup,
  Label,
} from "semantic-ui-react";

const containerStyles = {
  margin: "20px",
};

const ListApp = () => {
  return (
    <React.Fragment>
      <Container style={containerStyles}>
        <Grid columns="3">
          <Grid.Column width="4">
            <Button icon="bars"></Button>
          </Grid.Column>
          <Grid.Column width="8">
            <Header textAlign="center" as="h1">
              Todo List
            </Header>
          </Grid.Column>
          <Grid.Column width="4">
            <Button icon="plus" color="green" textAlign="right"></Button>
          </Grid.Column>
        </Grid>
        <Segment>
          <Header as="h2">New Task:</Header>
          <Form>
            <Form.Field
              control="input"
              label="Task Name"
              placeholder="Enter Task Name..."
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
            />
            <Button.Group fluid>
              <Button color="red">Cancel</Button>
              <Button.Or />
              <Button color="green">Add Task</Button>
            </Button.Group>
          </Form>
        </Segment>
        <Task name="Task 1" color="yellow" />
        <Task name="Task 2" color="red" />
        <Task name="Task 3" color="blue" />
      </Container>
    </React.Fragment>
  );
};

export default ListApp;
