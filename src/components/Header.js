import React from 'react';
import { Link } from "react-router-dom";

const HeaderLinks = [
{
	Name: "Experiences",
	Url: "/experiences",
},
{
	Name: "Projects",
	Url: "/projects",
},
];

const LogoName = "Jeff Zhao";

const NonHamburgerMenu = () => (
	<div className="non-hamburger-menu">
	{
		HeaderLinks.map(function(link, index) {
			return (
			<Link
				className="header-link"
				key={index}
				to={link.Url}>{link.Name}</Link>
			);
		})
	}
	</div>
);

function Header() {
	const menuRef = React.createRef();
	const menuBtnRef = React.createRef();

	function handleRef(event) {
		event.preventDefault();
		menuRef.current.classList.toggle("is-open");
		menuBtnRef.current.classList.toggle("is-open");
	}

	const HamburgerButton = () => (
		<button
			className="hamburger-button"
			ref={menuBtnRef}
			onClick={e => handleRef(e)}
		>
			<div className="bar1"></div>
			<div className="bar2"></div>
			<div className="bar3"></div>
		</button>
	);

	function HamburgerMenu() {
		return (
		<div ref={menuRef} className="hamburger-menu">
			<ul>
			{HeaderLinks.map(function(link, index) {
				return (
			<li id={`link`}><Link
				className="logo-link-nth"
				key={index}
				to={link.Url}>> {link.Name}</Link>
			</li>
				);
			})
			}
			</ul>
		</div>
		);
	}

	return (
<div className="header">
	<HamburgerMenu/>
<nav className="topnav">
	<div className="flex_group">
	<Link className="logo-link" to="/">{LogoName}</Link>
	<NonHamburgerMenu/>
	</div>
	<div className="flex_group">
	<HamburgerButton/>
	</div>
</nav>
</div>
	);
}

export { Header, HeaderLinks };
export default Header;
