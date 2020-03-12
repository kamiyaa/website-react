import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
	const { pathname } = useLocation();

	// just run the effect on pathname and/or search change
	useEffect(() => {
		try {
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth',
			});
		} catch (error) {
			window.scrollTo(0, 0);
		}
	}, [pathname]);

	return null;
}

export { ScrollToTop };
export default ScrollToTop;
