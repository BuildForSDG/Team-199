import React, { Component } from 'react';
import Map from './map';

import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton,  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle, Textfield  } from 'react-mdl';

  const api = require("@what3words/api");
            
  api.setOptions({ key: "what3words-api-key" });

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://assets.what3words.com/sdk/v3/what3words.js?key=J0YTTNEP";
    this.div.appendChild(script);

    const script2 = document.createElement("script");
    script2.async = true;
    script2.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD3UtX5ItKVQtn6vT9GHJ4FZzwveFqlnuY";
    this.div.appendChild(script2);  
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true,
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false,
    });
  }

  toggleCategories() {
    const api = require("@what3words/api");
            
    api.setOptions({ key: "J0YTTNEP" });
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '400', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', textAlign: 'justify', height: '176px', background: 'url(https://www.hrw.org/sites/default/files/styles/square/public/multimedia_images_2017/gambia_presser_1-18-17.jpg?itok=1jrRtAVx) center / cover'}} ></CardTitle>
            <CardText>

                <b>Reporting a Police emergency (non-emergencies)</b><br />
                Report crimes online or by calling 101 if they are not an emergency.
                You can also call 101 to give information to the police or make an enquiry.
                If you live in Africa you can search by postcode to find and contact your local policing team.<br /><br />

                <b>Reporting terrorist activity</b><br />
                Call 999 or the police anti-terrorist hotline on 0800 789 321 to report an immediate terrorist threat.
                You can also report a possible terrorist threat online.

            </CardText>
            <CardActions border>
              <Button colored>Report Emergency</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
            <Dialog open={this.state.openDialog}>
              <DialogTitle>Report Crime?</DialogTitle>
              <div className="App" ref={el => (this.div = el)}>
                <hr/>

                {/* Script is inserted here */}
              </div>
              <DialogContent>
                <p>
                  Allowing us to collect data will let us get you the
                </p>
                {/* Textfield with floating label */}
                <Textfield
                  onChange={() => {}}
                  label="Name"
                  floatingLabel
                  style={{ width: "200px" }}
                />

                {/* Numeric Textfield with floating label */}
                <Textfield
                  onChange={() => {}}
                  pattern="-?[0-9]*(\.[0-9]+)?"
                  error="Input is not a number!"
                  label="Mobile Number"
                  floatingLabel
                />
                {/* Numeric Textfield with floating label */}
                <Textfield
                  onChange={() => {}}
                  label="Address"
                  floatingLabel
                />
                <what3words-autosuggest/>
             

                
                <Map
                  centerAroundCurrentLocation
                  className="map"
                  google={this.state.activeTab}
                  style={{ height: '50%', position: 'relative', width: '100%' }}
                  zoom={14}
                />


              </DialogContent>
              <DialogActions>
              <Button type="button">Detect Address</Button>
                <Button type="button" onClick={this.handleCloseDialog}>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/media/Cvxk5q7WEAE6ufL.jpg) center / cover'}} ></CardTitle>
            <CardText>
            The Emergency Services Sector (ESS) is a community of millions of highly-skilled, trained personnel, 
            along with the physical and cyber resources, that provide a wide range of prevention, preparedness, 
            response, and recovery services during both day-to-day operations and incident response. The ESS includes
            geographically distributed facilities and equipment in both paid and volunteer capacities organized primarily
            at the federal, state, local, tribal, and territorial levels of government, such as city police departments and
            fire stations, county sheriff’s offices, Department of Defense police and fire departments, and town public works 
            departments.
            </CardText>
            <CardActions border>
            <Button  onClick={this.handleOpenDialog} colored>Report Emergency</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://observer.ug/images/SK-Mbuga-ambulance.jpg) center / cover'}} ></CardTitle>
            <CardText>
            African employees more than 3,600 trained emergency services personnel including primary, advanced 
            and critical care paramedics and emergency medical services dispatchers. Through the provision 
            of dispatch and paramedic services, expert patient care is delivered from the time a call for help 
            is placed to 9-1-1, to treatment at the scene and transport to hospital. <br /><br />
            African paramedics and support staff are also proud and active members of their communities, devoting countless volunteer service hours to local events and public education campaigns.
            </CardText>
            <CardActions border>
            <Button colored>Report Emergency</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>

      )

    } else if(this.state.activeTab === 1) {
    //   return (
    //     <div className="fire-rescue">
    //       {/* Project 2 */}
    //       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    //         <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pbs.twimg.com/media/Cvxk5q7WEAE6ufL.jpg) center / cover'}} ></CardTitle>
    //         <CardText>
    //           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    //         </CardText>
    //         <CardActions border>
    //         <Button colored>Report Emergency</Button>
    //         </CardActions>
    //         <CardMenu style={{color: '#fff'}}>
    //           <IconButton name="share" />
    //         </CardMenu>
    //       </Card>
    //     </div>
    //   )
    } else if(this.state.activeTab === 2) {
    //   return (
    //     <div className="paramedics">
    //       {/* Project 3 */}
    //       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    //         <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://observer.ug/images/SK-Mbuga-ambulance.jpg) center / cover'}} ></CardTitle>
    //         <CardText>
    //           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    //         </CardText>
    //         <CardActions border>
    //         <Button colored>Report Emergency</Button>
    //         </CardActions>
    //         <CardMenu style={{color: '#fff'}}>
    //           <IconButton name="share" />
    //         </CardMenu>
    //       </Card>
    //     </div>
    //   )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
          {/* <p className="emergency-text">Available Emergencies</p> */}
        {/* <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Available Emergencies</Tab>
        </Tabs> */}


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
