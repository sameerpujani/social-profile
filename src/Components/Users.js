import React, { Component } from "react";
import { Card, Image, List } from "semantic-ui-react";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    fetch("https://panorbit.in/api/users.json")
      .then(res => res.json())
      .then(data => {
        console.log("users", data.users);
        this.setState({ users: data.users });
      })
      .catch(err => console.error(err));
  }
  render() {
    console.log(this.state.users);
    return (
      <div className="App">
        <Card style={{ margin: "auto" }}>
          <Card.Content>
            <Card.Header>Select an account</Card.Header>
          </Card.Content>
          <Card.Content>
            <List divided verticalAlign="middle">
              {this.state.users.map(user => (
                <List.Item key={user.id}>
                  <Image avatar src={user.profilepicture} />
                  <List.Content>
                    <List.Header as="a" href={`/user/${user.id}/profile`}>
                      {user.name}
                    </List.Header>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
