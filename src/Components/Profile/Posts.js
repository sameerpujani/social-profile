import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import SidebarComponent from "../Modules/SidebarComponent";
import HeaderComponent from "../Modules/HeaderComponent";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.user_id = props.match.params.id;
  }
  render() {
    return (
      <div className="wrapper">
        <Grid>
          <Grid.Row stretched>
            <Grid.Column width={3}>
              <SidebarComponent id={this.user_id} />
            </Grid.Column>
            <Grid.Column width={13}>
              <HeaderComponent title="Posts" />

              {/* Main Content */}
              <div className="ui container">
                <div className="ui two column doubling stackable masonry grid">
                  <div className="ten wide column">
                    <div className="post-box ui border">
                      
                    </div>
                  </div>
                  <div className="column">
                    <div className="activity-box">
                      
                    </div>
                  </div>
                </div>
              </div>

              {/* <Grid>
                <Grid.Row>
                  
                  <Grid.Column width={6}>
										
									</Grid.Column>
									
									
                  <Grid.Column width={6}></Grid.Column>
                </Grid.Row>
              </Grid> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
