import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src={`${process.env.PUBLIC_URL} /assets/images/avatar_rnd.jpg`}
							alt="avatar"
							className="avatar-img"
						/>

						<div className="banner-text">
							<h1 className="banner-heading">Full Stack Web Developer</h1>

							<hr />

							<p>HTML | CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB | Node.js | Express | jQuery | React.js | npm | yarn | GIT | Github | MySQL | Firebase |  Media Queries | APIs | JSON | REST | AJAX | CLI |  Java  |  Moment.js | Google APIs | MS Office | Comp-Sci | SAP B1 </p>


							<div className="social-links">

								{/* LinkedIn */}
								<a href="https://www.linkedin.com/in/benjamin-williams-50096abb/" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>

								{/* Github */}
								<a href="https://github.com/bwilliams1991" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>

								{/* Stack Overflow */}
								<a href="https://stackoverflow.com/users/story/9155049#" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-stack-overflow" aria-hidden="true" />
								</a>

							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;
