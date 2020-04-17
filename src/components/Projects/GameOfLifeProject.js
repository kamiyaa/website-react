import React from "react";

import { ProjectHeader } from ".";

const GameOfLifeProject = {
	name: "Game of Life",
	description: "Game of Life Simulator",
	url: "https://github.com/kamiyaa/game-of-life",
	language: "Rust, Javascript, WebAssembly",
	owner: "kamiyaa",
	repoName: "game-of-life",
	previewImgUrl: "https://github.com/kamiyaa/game-of-life/raw/master/screenshot.png",
	previewThumbnailUrl: "https://github.com/kamiyaa/game-of-life/raw/master/screenshot.png",
	tags: [ "Rust",
		"WebAssembly",
		"Javascript",
		"Webpack"
	],
	githubStats: {},
};

function GameOfLifeProjectComponent() {
	return (
	<div>
	<ProjectHeader project={GameOfLifeProject}/>
	<p>
		<a
		target="_blank"
		rel="noopener noreferrer"
		href="https://kamiyaa.github.io/game-of-life/">
		<button className="bg-blue">
		Try it here!
		</button></a>
	</p>
	<p>This was my first exposure to Rust's WebAssembly facilities. From this
I've learned lots about how Rust/WebAssembly interfaces with Javascript. I also
learned more about webpack and how to package Javascript apps to be deployable
on the web.
	</p>
	</div>
	);
}

export { GameOfLifeProject, GameOfLifeProjectComponent };

export default GameOfLifeProject;
