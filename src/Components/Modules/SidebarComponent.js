import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, Segment } from "semantic-ui-react";

export default class SidebarComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id } = this.props;
    return (
      <Segment inverted>
        {/* <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" /> */}

        <div className="list-style ">
          <List divided inverted relaxed>
            <List.Item>
              <List.Header>
                <Link to={`/user/${id}/profile`}>Profile</Link>
              </List.Header>
            </List.Item>
            <List.Item>
              <List.Header>
                <Link to={`/user/${id}/posts`}>Posts</Link>
              </List.Header>
            </List.Item>
            <List.Item>
              <List.Header>
                <Link to={`/user/${id}/gallery`}>Gallery</Link>
              </List.Header>
            </List.Item>
            <List.Item>
              <List.Header>
                <Link to={`/user/${id}/todo`}>Todo</Link>
              </List.Header>
            </List.Item>
          </List>
        </div>
      </Segment>
    );
  }
}
