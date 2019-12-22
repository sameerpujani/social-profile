import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Image } from "semantic-ui-react";
import SidebarComponent from "../Modules/SidebarComponent";
import HeaderComponent from "../Modules/HeaderComponent";

export default class Album extends Component {
  constructor(props) {
    super(props);
		this.user_id = props.match.params.id;
		this.album_id = props.match.params.album_id;
		this.state = {
			album: {},
      photos: []
    };
  }

  componentDidMount() {
		fetch("https://panorbit.in/api/albums.json")
      .then(res => res.json())
      .then(data => {
				console.log("data", data);
				const album = data.album.filter(
          album => album.id === Number(this.album_id)
				);
        this.setState({ album: album[0] });
      })
      .catch(err => console.error(err));
    fetch("https://panorbit.in/api/photos.json")
      .then(res => res.json())
      .then(data => {
        console.log("data", data.albums);
        const photos = data.albums.filter(
          photo => photo.userId === Number(this.user_id) && photo.albumId === Number(this.album_id)
				);
        this.setState({ photos });
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
                      <Link
                        to={`/user/${this.user_id}/gallery`}
                        className="section"
                      >
                        Albums
                      </Link>
                      <i
                        aria-hidden="true"
                        className="right angle icon divider"
                      ></i>
                      <div className="active section">{this.state.album.title}</div>
                    </div>

                    {/* Album Photos */}
                    <div className="album-row">
                      <Grid>
                        <Grid.Row>
													{this.state.photos.map(photo => (
														<Grid.Column key={photo.id} width={4}>
															<Image
																src={photo.url}
																onError={(ev) => ev.target.src="https://react.semantic-ui.com/images/wireframe/square-image.png"}
																fluid
																className="mb-28"
															/>
														</Grid.Column>
													))}
                        </Grid.Row>
                      </Grid>
                    </div>
                  </Grid.Column>

                  {/* Completed Todo */}
                  {/* <Grid.Column width={6}></Grid.Column> */}
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
