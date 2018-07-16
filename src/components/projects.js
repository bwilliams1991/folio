import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}

	toggleCategories() {

		if (this.state.activeTab === 0) {
			return (
				<div className="projects-grid">
					{/* Project 1 */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} className='responsiveCard'>
						<CardTitle style={{ color: '#fff', height: '176px', background: 'url(../assets/images/OnTime.PNG) center / cover' }} >OnTime</CardTitle>
						<CardText>
							Never be late with On-Time; all-in-one event calendar, map directions, and scheduler. Add your events to the schedule table. View the events already created in the database. See the map and directions of the next event or an event from the table. All you need is a Google login to be On-Time.
            </CardText>
						<CardActions border>
							<Button colored><a href="https://github.com/bwilliams1991/OnTime">GitHub</a></Button>
							<Button colored><a href="https://belobig.github.io/OnTime/">Live Demo</a></Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					{/* Project 2 */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} className='responsiveCard'>
						<CardTitle style={{ color: '#fff', height: '231px', background: 'url(../assets/images/FortNite.PNG) center / cover' }} >FortNite Leaderboard</CardTitle>
						<CardText>
							This is an app to view your Fortnite scores and compare them to your friends or favorite streamer.
            </CardText>
						<CardActions border>
							<Button colored><a href="https://github.com/bwilliams1991/fortniteLeaderboard">GitHub</a></Button>
							<Button colored><a href="https://pacific-caverns-48876.herokuapp.com/">Live Demo</a></Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					{/* Project 3 */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }} className='responsiveCard'>
						<CardTitle style={{ color: '#fff', height: '176px', background: 'url(../assets/images/SIM.PNG) center / cover' }} >SIM</CardTitle>
						<CardText>
							This is Simple Inventory Manager or SIM for short. It's designed to help companies run more efficiently between processes and departments. This application is built to handle receiving, completing jobs, and final shippment of product.
            </CardText>
						<CardActions border>
							<Button colored><a href="https://github.com/bwilliams1991/SIM-Simple-Inventory-Manager">GitHub</a></Button>
							<Button colored><a href="https://simpleinventorymanager.herokuapp.com/">Live Demo</a></Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>


			)
		}
		//  else if(this.state.activeTab === 1) {
		//   return (
		//     <div><h1>Solo Projects</h1></div>
		//   )


	}



	render() {
		return (
			<div>
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>ALL</Tab>
					{/* <Tab>Solo Projects</Tab> */}
				</Tabs>


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
