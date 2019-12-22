import React, { Component } from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import SidebarComponent from "../Modules/SidebarComponent";
import HeaderComponent from "../Modules/HeaderComponent";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.user_id = props.match.params.id;
    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    fetch("https://panorbit.in/api/albums.json")
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        this.setState({ albums: data.album });
      })
      .catch(err => console.error(err));
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
              <HeaderComponent title="Gallery" />

              {/* Main Content */}
              <Grid>
                <Grid.Row>
                  {/* Breadcrumb */}
                  <Grid.Column width={16}>
                    <div className="ui breadcrumb" style={{ marginBottom: "20px" }}>
                      <div className="active section">Albums</div>
                    </div>
                    {/* Album Photos */}
                    <div className="album-row">
                      <Grid>
                        <Grid.Row>
                          {this.state.albums.map(album => (
                            <Grid.Column width={4}>
                              <Card className="mb-28" href={`/user/${this.user_id}/gallery/${album.id}`}>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                <Card.Content extra>{album.title}</Card.Content>
                              </Card>
                            </Grid.Column>
                          ))}
                        </Grid.Row>
                      </Grid>
                    </div>
                  </Grid.Column>

                  {/* Todo */}
                  <Grid.Column width={6}></Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
