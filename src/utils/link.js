import React from 'react';
import { Link } from "react-router-dom";

function ScrollOnClick(e) {
	try {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	} catch (error) {
		window.scrollTo(0, 0);
	}
}


function ScrollToTopLink(props) {
	return <Link
		onClick={ScrollOnClick}
		props={props}>{props.children}</Link>;
}

export { ScrollOnClick, ScrollToTopLink };
export default ScrollOnClick;
