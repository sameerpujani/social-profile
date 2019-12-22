import React, { Component } from "react";
import { Divider, Grid, Image } from "semantic-ui-react";
import SidebarComponent from "../Modules/SidebarComponent";
import HeaderComponent from "../Modules/HeaderComponent";
import "./profile.css";
import defaultProfile from "../../images/man.png";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.user_id = props.match.params.id;
    this.state = {
      user: {company: {}, address: { geo: {} }}
    }
  }
  componentDidMount() {
    fetch("https://panorbit.in/api/users.json")
      .then(res => res.json())
      .then(data => {
        console.log("users", data.users);
        const user = data.users.filter(
          user => user.id === Number(this.user_id)
        );
        console.log(user[0])
        // debugger
        this.setState({ user: user[0] });
      })
      .catch(err => console.error(err));
  }
  render() {
    const { user, user: { company, address } } = this.state;
    // const defaultProfile = "https://react.semantic-ui.com/images/wireframe/square-image.png";
    console.log(user.address.street);
    let profilePicture = '';
    if(typeof user.profilepicture === 'undefined' || user.profilepicture === null) {
      profilePicture = defaultProfile;
    } else {
      profilePicture = user.profilepicture;
    }

    return (
      <div className="wrapper">
        <Grid>
          <Grid.Row stretched>
            <Grid.Column width={3}>
              <SidebarComponent id={this.user_id} />
            </Grid.Column>
            <Grid.Column width={13}>
              {/* Header */}
              <HeaderComponent title="Profile" />

              {/* Main Content */}
              <Grid>
                <Grid.Row>
                  {/* Profile Information */}
                  <Grid.Column width={6}>
                    <div className="profile-info">
                      <div className="profile-avatar">
                        <Image
                          src={profilePicture}
                          onError={(ev) => ev.target.src = defaultProfile}
                          size="medium"
                          circular
                        />
                        <div className="caption value">{user.name}</div>
                      </div>
                      <div className="user-info">
                        <div className="info-bar">
                          <div className="key left">
                            Username<span>:</span>
                          </div>
                          <div className="value right">{user.username}</div>
                        </div>
                        <div className="info-bar">
                          <div className="key left">
                            e-mail<span>:</span>
                          </div>
                          <div className="value right">{user.email}</div>
                        </div>
                        <div className="info-bar">
                          <div className="key left">
                            Phone<span>:</span>
                          </div>
                          <div className="value right">{user.phone}</div>
                        </div>
                        <div className="info-bar">
                          <div className="key left">
                            Website<span>:</span>
                          </div>
                          <div className="value right">{user.website}</div>
                        </div>
                      </div>
                      <Divider fitted />
                      <div className="user-info company">
                        <h3
                          className="key"
                          style={{ marginBottom: 0, textAlign: "center" }}
                        >
                          Company
                        </h3>
                        <div className="info-bar">
                          <div className="key left">
                            Name<span>:</span>
                          </div>
                          <div className="value right">{company.name}</div>
                        </div>
                        <div className="info-bar">
                          <div className="key left">
                            catchphrase<span>:</span>
                          </div>
                          <div className="value right">{company.catchPhrase}</div>
                        </div>
                        <div className="info-bar">
                          <div className="key left">
                            bs<span>:</span>
                          </div>
                          <div className="value right">{company.bs}</div>
                        </div>
                      </div>
                    </div>
                  </Grid.Column>

                  {/* Profile Meta */}
                  <Grid.Column width={10}>
                    <div className="profile-meta">
                      <div className="user-info address">
                        <h3 className="key" style={{ marginBottom: 0 }}>
                          Address
                        </h3>
                        <div className="address-meta">
                          <div className="info-bar">
                            <div className="key left">
                              Steet<span>:</span>
                            </div>
                            <div className="value right">{address.street}</div>
                          </div>
                          <div className="info-bar">
                            <div className="key left">
                              Suite<span>:</span>
                            </div>
                            <div className="value right">{address.suite}</div>
                          </div>
                          <div className="info-bar">
                            <div className="key left">
                              City<span>:</span>
                            </div>
                            <div className="value right">{address.city}</div>
                          </div>
                          <div className="info-bar">
                            <div className="key left">
                              Zipcode<span>:</span>
                            </div>
                            <div className="value right">{address.zipcode}</div>
                          </div>
                          <div className="map-box">
                            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                            <div className="lat-long">
                              <span>
                                <span className="key">Lat: </span>
                                <span className="value">{address.geo.lat}</span>
                              </span>
                              <span>
                                <span
                                  className="key"
                                  style={{ marginLeft: "15px" }}
                                >
                                  Long:{" "}
                                </span>
                                <span className="value">{address.geo.lng}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
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
