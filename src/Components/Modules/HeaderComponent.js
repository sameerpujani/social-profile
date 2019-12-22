import React from "react";
import { Link } from "react-router-dom";
import { Header, Divider } from "semantic-ui-react";

const HeaderComponent = props => {
  return (
    <>
      <div className="ui" style={{ marginTop: "0.75rem" }}>
        <Header as="h1" floated="left" style={{ marginBottom: 0, fontSize: '20px' }}>
          {props.title}
        </Header>
        <Header as="div" floated="right" className="horizontal list">
          <Link to="#" role="listitem" className="item">
            <img
              alt="avatar"
              src="https://react.semantic-ui.com/images/avatar/small/tom.jpg"
              className="ui avatar image"
            />
            <div className="content">
              <div className="header">Tom</div>
            </div>
          </Link>
        </Header>
      </div>
      <Divider clearing />
    </>
  );
};

export default HeaderComponent;
