import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
	Home,
	Experiences,
	ExperienceDetail,
	Projects,
	ProjectDetail,
} from "./pages";

function AppRouter() {
	return (
<Router>
	<Switch>
	<Route exact path="/" component={Home}/>
	<Route exact path="/experiences" component={Experiences}/>
	<Route exact path="/experiences/:id" component={ExperienceDetail}/>
	<Route exact path="/projects" component={Projects}/>
	<Route exact path="/projects/:id" component={ProjectDetail}/>
	</Switch>
</Router>
	);
}

export default AppRouter;
