import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./pages";
import {
	Experiences,
	ExperienceDetails,
} from "./pages/experiences";
import {
	Projects,
	ProjectDetails,
} from "./pages/projects";

function AppRouter() {
	return (
<Router>
	<Switch>
	<Route exact path="/" component={Home}/>
	<Route exact path="/experiences" component={Experiences}/>
	<Route exact path="/experiences/:id" component={ExperienceDetails}/>
	<Route exact path="/projects" component={Projects}/>
	<Route exact path="/projects/:id" component={ProjectDetails}/>
	</Switch>
</Router>
	);
}

export default AppRouter;
