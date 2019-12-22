import React, { Component } from "react";
import { Link, matchPath } from "react-router-dom";
import { List } from "semantic-ui-react";

export default class SidebarComponent extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className="ui segment sidebar-menu br-25">
        <div className="list-style ">
          <List divided inverted relaxed>
            <List.Item>
              <List.Header>
                <ActiveLink to={`/user/${id}/profile`}>Profile</ActiveLink>
              </List.Header>
            </List.Item>
            <List.Item>
              <List.Header>
                <ActiveLink to={`/user/${id}/posts`}>Posts</ActiveLink>
              </List.Header>
            </List.Item>
            <List.Item>
              <List.Header>
                <ActiveLink to={`/user/${id}/gallery`}>Gallery</ActiveLink>
              </List.Header>
            </List.Item>
            <List.Item>
              <List.Header>
                <ActiveLink to={`/user/${id}/todo`}>ToDo</ActiveLink>
              </List.Header>
            </List.Item>
          </List>
        </div>
      </div>
    );
  }
}

const ActiveLink = (props) => {
  const { pathname } = window.location;
  let match = matchPath(pathname, {
      path: props.to,
      exact: false,
      strict: false
  });
  return <Link className={match ? "active" : "" } to={props.to}> {props.children}</Link>;
}