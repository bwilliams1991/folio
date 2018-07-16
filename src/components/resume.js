import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
// import avatar from '../../public/assets/images/avatar_rnd.jpg'

class Resume extends Component {
	render() {
		return (
			<div className='white'>
				<Grid>
					<Cell col={4}>
						<div style={{ textAlign: 'center' }}>
							<img
								src={`${process.env.PUBLIC_URL} /assets/images/avatar_rnd.jpg`}
								alt="avatar"
								style={{ height: '200px' }}
								className="avatar-img"
							/>
						</div>

						<h2 style={{ paddingTop: '2em' }}>Benjamin Williams</h2>
						<h4 style={{ color: 'grey' }}>Newly-minted web Developer</h4>
						<hr style={{ borderTop: '3px solid #833fb2', width: '60%' }} />
						<p>Web developer with a background in networking and ERP use and management. Able to build a sophisticated website from back to front. Adept at working with diverse teams to implement projects. Self-starter with definitive problem solving and organizational abilities; proven ability to master new skills quickly.
						</p>
						<hr style={{ borderTop: '3px solid #833fb2', width: '60%' }} />
						<h5>Address</h5>
						<p>West Jordan, UT</p>
						<h5>Phone</h5>
						<p>801.349.8844</p>
						<h5>Email</h5>
						<p>bwilly91@msn.com</p>
						{/* <h5>Websites</h5>
						<p>mywebsite.com</p> */}
						<hr style={{ borderTop: '3px solid #833fb2', width: '60%' }} />
					</Cell>
					<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>


						<Education
							startYear={2010}
							endYear={2012}
							schoolName="College of Western Idaho"
							schoolDescription="Associates of Applied Science Degree Internetworking and Communications"
						/>

						<Education
							startYear={2012}
							endYear={2014}
							schoolName="Salt Lake Community College"
							schoolDescription="General education classes so I can attend the University of Utah to obtain a bachelor’s Degree"
						/>

						<Education
							startYear={2012}
							endYear={2014}
							schoolName="University of Utah Coding Bootcamp"
							schoolDescription="An intensive 24-week long boot camp dedicated to designing and building web applications using a variety of skills and technologies."
						/>
						<hr style={{ borderTop: '3px solid #e22947' }} />

						<h2>Experience</h2>

						<Experience
							startYear={2012}
							endYear={2014}
							companyName="Gadget Guard / Penumbra Brands"
							jobName="Manufacturing Technician"
							jobDescription="Package, pull and prepare customer orders, to fulfill customer demand and requirements"
						/>

						<Experience
							startYear={2014}
							endYear={2016}
							companyName="Gadget Guard / Penumbra Brands"
							jobName="Sr. Plotter Operator"
							jobDescription="Responsible for maintenance, running, and quality metrics over three plotters."
						/>

						<Experience
							startYear={2016}
							endYear={2017}
							companyName="Gadget Guard / Penumbra Brands"
							jobName="Machine Cell Lead"
							jobDescription="Responsible for setup, maintence of label and velco application machines. Management of employee and machine time, using lean metrics and prodcution queue."
						/>

						<Experience
							startYear={2017}
							endYear={2018}
							companyName="Gadget Guard / Penumbra Brands"
							jobName="Continuous Improvement Project Lead"
							jobDescription="Act as internal Admin of SAP B1 for HANA. Manage new improvement projects. e.g. Adding a Warehouse Management System to the SAP ERP, Initial implementation of SAP, Integration of shipping carriers into SAP, SAP migration from a cloud service to an on-premise server."
						/>
						<hr style={{ borderTop: '3px solid #e22947' }} />
						<h2>Skills</h2>
						<h3>Front-end</h3>
						<Skills
							skill="Javascript"
							progress={55}
						/>
						<Skills
							skill="HTML"
							progress={95}
						/>
						<Skills
							skill="React"
							progress={35}
						/>
						<Skills
							skill="CSS"
							progress={78}
						/>
						<Skills
							skill="Bootstrap"
							progress={65}
						/>
						<Skills
							skill="jQuery"
							progress={45}
						/>
						<h3>Back-end</h3>
						<Skills
							skill="Firebase"
							progress={45}
						/>
						<Skills
							skill="NodeJS"
							progress={60}
						/>
						<Skills
							skill="ExpressJS"
							progress={55}
						/>
						<Skills
							skill="MongoDB"
							progress={40}
						/>
						<Skills
							skill="MySQL"
							progress={60}
						/>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Resume;
