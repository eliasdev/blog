import React from 'react';
import ReactDOM from 'react-dom/client';
import ydLogo from '../../assets/ydlogo.png';
import djiLogo from '../../assets/djilogo.jpg';
import './index.css';

function BlogHeader(){
	return(
		<div>
			<header>
				<nav>
					<ul className="menu-list">
						<li>
							<img src={ydLogo} />
						</li>
						<li>
							<img id="djilogo" src={djiLogo} />
						</li>
						<li>
							<h1>DJI Mini 3 | Pros, Cons and Things to know before purchase</h1>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
export default BlogHeader;