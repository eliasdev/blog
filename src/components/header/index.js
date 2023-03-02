import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function BlogHeader(){
	return(
		<div>
			<header>
				<nav>
					<ul>
						<li>
							<h1>DJI Mini 3 | Pros, Cons and Things to know before purchase</h1>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <BlogHeader /> );*/
export default BlogHeader;