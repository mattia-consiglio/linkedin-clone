// Navbar.tsx
import React from "react";

const Navbar = () => {
	return (
		<nav>
			<div className="logo">Logo</div>
			<ul className="nav-links">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">My Network</a>
				</li>
				<li>
					<a href="#">Jobs</a>
				</li>
				<li>
					<a href="#">Messaging</a>
				</li>
				<li>
					<a href="#">Notifications</a>
				</li>
				<li>
					<a href="#">Me</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
