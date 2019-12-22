import React, { Component } from "react";
import { Card, Grid, Icon } from "semantic-ui-react";
import SidebarComponent from "../Modules/SidebarComponent";
import HeaderComponent from "../Modules/HeaderComponent";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.user_id = props.match.params.id;
    this.state = {
      todo_pending: [],
      todo_completed: [],
      todo_current_focus: false
    };
  }
  componentDidMount() {
    fetch("https://panorbit.in/api/todo.json")
      .then(res => res.json())
      .then(data => {
        console.log("todo", data.todo);
        console.log("todo", this.user_id);
        const todo_pending = data.todo.filter(
          todo => todo.userId === Number(this.user_id) && !todo.completed
        );
        const todo_completed = data.todo.filter(
          todo => todo.userId === Number(this.user_id) && todo.completed
        );
        console.log("rodos", todo_completed);
        console.log("rodos", todo_pending);
        this.setState({ todo_completed, todo_pending });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { todo_pending, todo_completed, todo_current_focus } = this.state;

    return (
      <div className="wrapper">
        <Grid>
          <Grid.Row stretched>
            <Grid.Column width={3}>
              <SidebarComponent id={this.user_id} />
            </Grid.Column>
            <Grid.Column width={13}>
              <HeaderComponent title="ToDo" />

              {/* Main Content */}
              <Grid>
                <Grid.Row>
                  {/* Pending Todo */}
                  <Grid.Column width={10}>
                    <div className="todo-list pending">
                      <Card.Group>
                        <Card fluid>
                          <Card.Content style={{ backgroundColor: "#E1E1E1" }}>
                            <Card.Header>Todo</Card.Header>
                          </Card.Content>
                          <Card.Content>
                            {todo_pending.length > 0
                              ? todo_pending.map(todo => {
                                  return (
                                    <div key={todo.id} className="ui checkbox">
                                      <input
                                        type="checkbox"
                                        className="hidden"
                                        tabindex="0"
                                      />
                                      <label contentEditable className="value">
                                        {todo.title}
                                      </label>
                                    </div>
                                  );
                                })
                              : null}

                            <div className="ui checkbox">
                              <input
                                type="checkbox"
                                className="hidden"
                                tabindex="0"
                              />
                              <label
                                contentEditable
                                className={todo_current_focus ? "value" : "key"}
                                onFocus={() => this.setState({ todo_current_focus: true })}
                                onBlur={() => this.setState({ todo_current_focus: false })}
                              >
                                <span className={ todo_current_focus ? "hide" : "show"}>
                                  Type your task title
                                </span>
                              </label>
                            </div>
                          </Card.Content>
                        </Card>
                      </Card.Group>
                    </div>
                  </Grid.Column>

                  {/* Completed Todo */}
                  <Grid.Column width={6}>
                    <div className="todo-list completed">
                      <Card.Group>
                        <Card fluid>
                          <Card.Content style={{ backgroundColor: "#EEEEEE" }}>
                            <Card.Header>
                              Completed{" "}
                              <Icon
                                name="check circle"
                                style={{ color: "#33CF8B" }}
                              />
                            </Card.Header>
                          </Card.Content>
                          <Card.Content>
                            {todo_completed.length > 0
                              ? todo_completed.map(todo => {
                                  return (
                                    <div key={todo.id} className="ui checkbox">
                                      <input
                                        checked
                                        type="checkbox"
                                        className="hidden"
                                        tabindex="0"
                                      />
                                      <label className="meta">{todo.title}</label>
                                    </div>
                                  );
                                })
                              : null}
                          </Card.Content>
                        </Card>
                      </Card.Group>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
