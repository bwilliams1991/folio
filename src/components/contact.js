import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Ben Williams</h2>
						<img
							src="https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-2-512.png"
							alt="avatar"
							style={{ height: '250px' }}
						/>
						<p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
							I am originally from Boise, Idaho. I moved to Utah in 2012 to be in a better job market.
						</p>
						<p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
							In 2012 I recieved a degree in Networking and Communications from the College of Western Idaho.
						</p>
						<p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
							I currently work as a Project Lead for Penumbra Brands. I have completed several improvement project such as integrating shipping into our SAP system, as well as upgrading our labeling systems. I am currently migrating our ERP system from a cloud server to a local on-premise server. 
						</p>

					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr />

						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
										<i className="fa fa-phone-square" aria-hidden="true" />
										801.349.8844
                  </ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
										<i className="fa fa-envelope" aria-hidden="true" />
										bwilly91@msn.com
                  </ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
										<i className="fa fa-gamepad" aria-hidden="true" />
										praxiSiphion
                  </ListItemContent>
								</ListItem>

							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;
